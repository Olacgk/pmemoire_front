// import React from 'react'

import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { _login } from "../../providers/auth.actions";
import { message } from "antd";

interface LoginType {email: string, password:string}
export default function Login() {
  const navigate = useNavigate()

  const {register, handleSubmit, formState:{errors}} = useForm<LoginType>();

  const onSubmit : SubmitHandler<LoginType> = (data) => {
    console.log(data);
    _login(data).then((response)=> {
      if(response?.data?.isAuthSuccessful){
        sessionStorage.setItem(
          "accessToken", response?.data?.token
        );
        sessionStorage.setItem("userInfos", JSON.stringify(response?.data?.user));
        navigate("/dashboard")
      }else {
        message.error("Login ou mot de passe incorrect")
      }
    })
}

  return (
    <>
      <div className="flex items-center justify-center">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Se connecter
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  {...register("email", 
                        {required : 'Veuillez remplir ce champ.'})}
                            className={`block w-full border ${errors.email ? 'border-red-600' : 'border-gray-300'} px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400`}
                            placeholder="username" 
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Mot de passe
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-[#041f4e] hover:text-indigo-500">
                    Mot de passe oublié?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  {...register("password", {required : 'Veuillez remplir ce champ.'})}
                  className={`block w-full border ${errors.password ? 'border-red-600' : 'border-gray-300'} px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400`}
                  placeholder="*******"
                />
              </div>
            </div>

            <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#041f4e] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Pas de compte?{' '}
            <Link to="#" className="font-semibold leading-6 text-[#041f4e] hover:text-indigo-500">
              Contactez l'administration
            </Link>
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
