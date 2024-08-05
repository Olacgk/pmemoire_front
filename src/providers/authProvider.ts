import type { AuthProvider, CheckResponse } from "@refinedev/core";
const base_url = process.env.NODE_ENV == 'development'?'http://localhost':'http://167.71.11.232'
const authProvider: AuthProvider = {
    login: async (values) => {
        const res = await fetch(`${base_url}/login/`, {
            method: 'POST',
            body: JSON.stringify(values)
        });

        const data = await res.json();
        console.log({ data });

        if (res.status === 200) {
            console.log({ res });
            return {
                success: true,
                successNotification: {
                    message: 'success',
                    description: 'Connexion éffectuée avec succès.',
                    data
                },
                redirectTo: data?.redirect_url[0] == '/' ? data?.redirect_url : '/' + data?.redirect_url
            };
        } else {
            console.log('errro');
            return {
                success: false,
                error: {
                    message: "Erreur de connexion",
                    name: "Email ou Mot de passe invalide.",
                },
            };
        }

    },
    // check: async () => {
    //     const user = Cookies.get('access_token')
    //     console.log({user})
    //     if (user) {
    //       return {
    //         authenticated: true,
    //       };
    //     }
    //     return {
    //       authenticated: false,
    //       logout: true,
    //       redirectTo: "/login",
    //       error: {
    //         message: "Verification échouée.",
    //         name: "Non autorisé",
    //       },
    //     };
    // },
    logout: async ({ redirectPath }) => {
        const rs = await fetch(`${base_url}/logout/`);
        await rs.json();
        return {
            success: true,
            redirectTo: redirectPath,
            successNotification: {
                message: "Deconnexion",
                description: "Deconnexion éffectuée avec succès.",
            },
        };
    },
    onError: async (params: any) => { return { redirectTo: '' }; },
    // optional methods
    register: async (values) => {
        const res = await fetch(`${base_url}/register/`, {
            method: 'POST',
            body: JSON.stringify(values)
        });

        const data: any = await res.json();

        if (res.status == 200) {
            return {
                success: true,
                successNotification: {
                    message: 'Inscription',
                    description: 'Inscription éffectuée avec succès.'
                },
                redirectTo: '/login'
            };
        } else {
            return {
                success: false,
                error: {
                    name: 'Register error',
                    message: data.error_message
                }
            };
        }

    },
    check: function (params?: any): Promise<CheckResponse> {
        throw new Error("Function not implemented.");
    }
};

export default authProvider;