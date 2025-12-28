import api from "./Api";

export async function fetchData() {
    try {
        const response = await api();
        return response.data
    } catch (err) {
         if (err.response) {
        throw({
          type : "server", 
          uiMessage: "Sorry, Server Error! please try again later.",
          status : err.response.status , 
          devMessage : err.response.data 
        });
    } else if (err.request) {
      throw({
        type : "client\network" ,
        uiMessage : "Not Internet Connection. Please check your Internet." ,
        status : null ,
        devMessage : err.message,
      })
    } else {
      // Something happened in setting up the request that triggered an Error
      throw({
        type: "unknown",
        uiMessage: "Unexpected Error occurred.",
        status: null , 
        devMessage: err.message
      });
    }
    }
}



