import { DataProvider, HttpError } from "@refinedev/core";

const base_url = "https://localhost:7297/api";

export const myDataProvider: DataProvider = {
  getOne: async ({ resource, id }) => {
    const response = await fetch(`${base_url}/${resource}/${id}`);
    const data = await response.json();

    return { data };
  },
  getList: async ({ resource, meta }) => {
    // this logic has to be re-seen
    const method: any = meta?.method ? meta?.method : "GET";
    // console.log(process)
    const response = await fetch(`${base_url}/${resource}`, {
      method,
    });
    const data = await response.json();
    console.log({ data: data });

    const total = data.length;

    return { data, total };
  },
//  getList : async ({ resource, meta }) => {
//     const method = meta?.method ?? 'GET'; // Use nullish coalescing operator for cleaner default value assignment
  
//     try {
//       const response = await fetch(`${base_url}/${resource}`, { method });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const data = await response.json();
  
//       // Optional: Add validation to ensure data is an array if you expect it to be
//       if (!Array.isArray(data)) {
//         throw new Error('Response data is not an array');
//       }
  
//       console.log({ data });
  
//       const total = data.length;
  
//       return { data, total };
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Handle or rethrow the error as needed
//       throw error;
//     }
//   },
  create: async ({ resource, variables, meta }) => {
    // this logic has to be re-seen
    const method: any = meta?.method ? meta?.method : "POST";

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    // console.log({variables,  meta})
    const response = await fetch(`${base_url}/${resource}`, {
      method,
      body: meta?.isFileUpload ? meta?.formData : JSON.stringify(variables),
      headers,
    });

    let data: any = {};

    if (response.status >= 200 && response.status < 300) {
      console.log("Request successful!");
    } else {
      data = await response.json();
      const error: HttpError = {
        message: data.detail ?? data.message,
        statusCode: response.status,
      };
      return Promise.reject(error);
    }

    return {
      data,
    };
  },
  update: async ({ resource, id, variables, meta }) => {
    // this logic has to be re-seen
    const url = id
      ? `${base_url}/${resource}/${id}/`
      : `${base_url}/${resource}/`;

      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
    const method: any = meta?.method ? meta?.method : "PUT";
    const response = await fetch(url, {
      method,
      body: JSON.stringify(variables),
      headers
    });

    const data = await response.json();

    if (response.status >= 200 && response.status < 300) {
      console.log("Request successful!");
    } else {
      const error: HttpError = {
        message: data.detail ?? data.message,
        statusCode: response.status,
      };
      return Promise.reject(error);
    }

    return {
      data,
    };
  },
  deleteOne: async ({ resource, id, variables }) => {
    // this logic has to be re-seen
    const response = await fetch(`${base_url}/${resource}/${id}`, {
      method: "DELETE",
      body: JSON.stringify({ variables }),
    });

    const data = await response.json();

    return {
      data,
    };
  },
  getApiUrl: function (): string {
    throw new Error("Function not implemented.");
  },
};
