import axios from "axios";
const URL_API = "https://fligths-back.herokuapp.com/vuelos";
export const SendFligth = async (flight ) => {
 const url=`${URL_API}/`
 console.log(url);
  try {
    const { data } = await axios.post(url,flight)
   console.log(data)
   console.log(flight.id);
  } catch (error) {
    console.log(error);
    // return error;
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

