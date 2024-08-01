import axios from "axios";

const BASE_URL  = "https://strangercats.io:5010/"
export const Axios  =  axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    }
  });


export const getConversion  = async (amountIn, tokenIn, tokenOut) => {
  
  
  const res = await axios.get(`https://api.nowpayments.io/v1/estimate?amount=${amountIn}&currency_from=${tokenIn}&currency_to=${tokenOut}`, {
    headers : {
      "x-api-key" : "ET8REJQ-MSD4T0X-GWV85TR-8FH8PMG"
    }
  })
  return res.data.estimated_amount
}