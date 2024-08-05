import axios from "axios";
import { message } from "antd";

const API_URL = "https://localhost:7297";
export const  _login = async (payload : any) => {
    try {
        const response = await axios.post(`${API_URL}/api/Auth/Login` , payload );
        return response
        
    } catch (error) {
        console.log(error);
        message.error("Oops..., quelque chose s'est mal passée");
    }
}


// export const _getMe = async () => {
//     try {
//         const response = axios.get(`${API_URL}${endpoints.auth.ME}` , { 
//             headers : {
//                 Authorization : ` Bearer ${sessionStorage.getItem("accessToken")}`
//             }
//         })
//         return response
        
//     } catch (error) {
//         console.log(error);
//         message.error("Oops..., quelque chose s'est mal passée");
//     }
// }


// export const _logout = async () => {
    
//     try {
//         const response = axios.post(`${API_URL}/api/users/logout` , { 
//             headers : {
//                 Authorization : ` Bearer ${sessionStorage.getItem("access_token")}`
//             }
//         })
//         return response
        
//     } catch (error) {
//         console.log(error);
//         message.error("Oops..., quelque chose s'est mal passée");
//     }
// }



