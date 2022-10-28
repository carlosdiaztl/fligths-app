import axios from "axios";
const URL_API = "https://fligths-back.herokuapp.com/vuelos";
export const SendFligth = async (flight ,id) => {
 
  try {
    const { data } = await axios.put(`${URL_API}/${id} `,flight)
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
const URL_COMPRAS ="https://fligths-back.herokuapp.com/vuelosconfirmados"
export const SendBuy = async (Buy = {}) => {
 
  try {
    const { data } = await axios.post(URL_COMPRAS,Buy)
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// const status = ({
//     method: 'PUT',
//     url: `${URL}/${endpoint}`,
//     timeout: 3000,
//     data: obj,
//     headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Content-Type": "application/json",
//         Accept: "application/json",
//     },
// });

