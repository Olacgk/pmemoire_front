// import React from 'react'
import { BaseRecord } from "@refinedev/core";
import { Button, message, Modal, Popconfirm, Skeleton, Table } from "antd";
import { useEffect, useState } from "react";
import { myDataProvider } from "../../providers/myDataProvider";
import { useForm } from "react-hook-form";
import { ExpertType } from "../../interfaces/personne";
import { DeleteOutlined, EditFilled } from "@ant-design/icons";

export default function Expert() {
  const [data, setData] = useState<BaseRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [addVisible, setAddVisible] = useState(false);
  const [editExpert, setEditExpert] = useState<ExpertType>();
  const [editVisible, setEditVisible] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ExpertType>();

  const columns = [
    {
      title: "Nom",
      dataIndex: "nom",
    },
    {
      title: "Prénom",
      dataIndex: "prenom",
    },
    {
      title: "Spécialité",
      dataIndex: "specialite",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Actions",
      render: (record: ExpertType) => {
        const handleEdit = () => {
          setEditExpert(record);
          setEditVisible(true);
          setValue("id", record.id);
        };
        return (
          <div className="flex gap-10 justify-center items-center">
            <Popconfirm
              title="Êtes-vous sûr de vouloir supprimer?"
              onConfirm={() => removeExpert(record.id)}
            >
              <DeleteOutlined className="text-red-600 text-lg cursor-pointer" />
            </Popconfirm>
            <EditFilled
              className="text-blue-700 text-lg cursor-pointer"
              onClick={handleEdit}
            />
          </div>
        );
      },
    },
  ];

  const fetchData = async () => {
    try {
      const response = await myDataProvider.getList<BaseRecord>({
        resource: "Expert",
      });
      setData(response.data);
    } catch (error) {
      message.error("Échec de l'extraction des données");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addExpert = async (formData: ExpertType) => {
    try {
      const response = await myDataProvider.create({
        resource: "Expert",
        variables: formData,
      });
      setData((prevData) => [...prevData, response.data]);
      message.success("Expert ajouté avec succès");
      setAddVisible(false);
      // onreset(); // Reset the form
    } catch (error) {
      message.error("Échec de l'ajout de l'expert");
    }
  };

  const removeExpert = async (id: number) => {
    try {
      await myDataProvider.deleteOne({
        resource: `Expert/${id}`,
        id: "",
      });
      fetchData();
      message.success("Expert supprimé avec succès");
    } catch (error) {
      message.error("Echec de la suppression de l'expert");
    }
  };

  const updateExpert = async (formData: ExpertType) => {
    try {
      await myDataProvider.update({
        resource: `Expert`,
        id: "",
        variables: formData,
      });
      fetchData();
      message.success("Modification effectuée");
    } catch (error) {
      message.error("Échec de la modification de l'expert");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold text-[#041f4e]">Experts</p>
        <Button onClick={() => setAddVisible(true)}>Ajouter</Button>
      </div>
      <div>
        <Modal
          open={addVisible}
          onCancel={() => setAddVisible(false)}
          title="Ajouter un Expert"
          okText="Enregistrer"
          onOk={handleSubmit(addExpert)}
        >
          <form method="post">
            <div className="border-b border-gray-900/10 pb-12">
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Veuillez renseigner les informations de l'expert.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Prénom <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("prenom", {
                        required: "Veuillez remplir ce champ.",
                      })}
                      className={`block w-full border ${
                        errors.prenom ? "border-red-600" : "border-gray-300"
                      } px-4 py-1.5 text-sm rounded-md focus:border-[#041f4e] placeholder-gray-400 sm:text-sm sm:leading-6`}
                      placeholder="Prénom de l'expert"
                    />
                    <p className="text-red-600 text-xs">
                      {errors.prenom?.message}
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Nom <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("nom", {
                        required: "Veuillez remplir ce champ.",
                      })}
                      className={`block w-full border ${
                        errors.nom ? "border-red-600" : "border-gray-300"
                      } px-4 py-1.5 text-sm rounded-md focus:border-[#041f4e] placeholder-gray-400 sm:text-sm sm:leading-6`}
                      placeholder="Nom de l'expert"
                    />
                    <p className="text-red-600 text-xs">
                      {errors.nom?.message}
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      {...register("email", {
                        required: "Veuillez remplir ce champ.",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Le format n'est pas valide.",
                        },
                      })}
                      id="email"
                      className={`block w-full border ${
                        errors.email ? "border-red-600" : "border-gray-300"
                      } px-4 py-1.5 text-sm rounded-md focus:border-[#041f4e] placeholder-gray-400 sm:text-sm sm:leading-6`}
                      placeholder="youremail.@domain.com"
                    />
                    <p className="text-red-600 text-xs">
                      {errors.email?.message}
                    </p>
                  </div>
                </div>

                <div className="col-span-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Spécialité <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("specialite", {
                        required: "Veuillez remplir ce champ.",
                      })}
                      className={`block w-full border ${
                        errors.specialite ? "border-red-600" : "border-gray-300"
                      } px-4 py-1.5 text-sm rounded-md focus:border-[#041f4e] placeholder-gray-400 sm:text-sm sm:leading-6`}
                      placeholder="Spécialité de l'expert"
                    />
                    <p className="text-red-600 text-xs">
                      {errors.specialite?.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal>
        <Modal
          open={editVisible}
          onCancel={() => {setEditVisible(false); reset();}}
          title="Modifier un Expert"
          okText="Modifier"
          onOk={handleSubmit(updateExpert)}
        >
          <form method="post">
            <div className="border-b border-gray-900/10 pb-12">
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Veuillez renseigner les informations de l'expert.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Prénom <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("prenom", {
                        required: "Veuillez remplir ce champ.",
                      })}
                      defaultValue={editExpert?.prenom}
                      className={`block w-full border ${
                        errors.prenom ? "border-red-600" : "border-gray-300"
                      } px-4 py-1.5 text-sm rounded-md focus:border-[#041f4e] placeholder-gray-400 sm:text-sm sm:leading-6`}
                      placeholder="Prénom de l'expert"
                    />
                    <p className="text-red-600 text-xs">
                      {errors.prenom?.message}
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Nom <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("nom", {
                        required: "Veuillez remplir ce champ.",
                      })}
                      defaultValue={editExpert?.nom}
                      className={`block w-full border ${
                        errors.nom ? "border-red-600" : "border-gray-300"
                      } px-4 py-1.5 text-sm rounded-md focus:border-[#041f4e] placeholder-gray-400 sm:text-sm sm:leading-6`}
                      placeholder="Nom de l'expert"
                    />
                    <p className="text-red-600 text-xs">
                      {errors.nom?.message}
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      {...register("email", {
                        required: "Veuillez remplir ce champ.",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Le format n'est pas valide.",
                        },
                      })}
                      id="email"
                      defaultValue={editExpert?.email}
                      className={`block w-full border ${
                        errors.email ? "border-red-600" : "border-gray-300"
                      } px-4 py-1.5 text-sm rounded-md focus:border-[#041f4e] placeholder-gray-400 sm:text-sm sm:leading-6`}
                      placeholder="youremail.@domain.com"
                    />
                    <p className="text-red-600 text-xs">
                      {errors.email?.message}
                    </p>
                  </div>
                </div>

                <div className="col-span-full">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Spécialité <span className="text-red-600">*</span>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      {...register("specialite", {
                        required: "Veuillez remplir ce champ.",
                      })}
                      defaultValue={editExpert?.specialite}
                      className={`block w-full border ${
                        errors.specialite ? "border-red-600" : "border-gray-300"
                      } px-4 py-1.5 text-sm rounded-md focus:border-[#041f4e] placeholder-gray-400 sm:text-sm sm:leading-6`}
                      placeholder="Spécialité de l'expert"
                    />
                    <p className="text-red-600 text-xs">
                      {errors.specialite?.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal>

        {
          !loading ? 
          <Table
            loading={loading}
            columns={columns}
            dataSource={data}
            rowKey={(record) => record.id as string}
            pagination={{ pageSize: 5 }}
          />
          :
          <Skeleton/>
        }

      </div>
    </div>
  );
}
