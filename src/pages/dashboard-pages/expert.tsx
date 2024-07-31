// import React from 'react'
import { BaseRecord } from "@refinedev/core";
import { Button, message, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { myDataProvider } from "../../providers/myDataProvider";

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
  },
];

export default function Expert() {
  const [data, setData] = useState<BaseRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [addVisible, setAddVisible] = useState(false);

  useEffect(() => {
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

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold text-[#041f4e]">Experts</p>
        <Button onClick={()=>setAddVisible(true)}>Ajouter</Button>
      </div>
      <div>
        <Modal open={addVisible} onCancel={()=>setAddVisible(false)} title="Ajouter un Expert">
          <p>Modal Content</p>
        </Modal>
        <Table
          loading={loading}
          columns={columns}
          dataSource={data}
          rowKey={"id"}
        />
      </div>
    </div>
  );
}
