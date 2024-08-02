import axios from "axios";
import Moralis from "moralis";
// const Moralis = require("moralis").default;

const BASE_URL  = "https://strangercats.io:5010/"

export const Axios  =  axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    }
  });








export const getConversion  = async (amountIn, tokenIn, tokenOut) => {
  const solPrice = 167.03
  const ethereumPrice = 3199.23
  if (tokenIn == "sol"){
    return solPrice * Number(amountIn)
  }else if (tokenIn == "eth"){
    return ethereumPrice * Number(amountIn)
  }else if (tokenOut == "sol"){
    return Number(amountIn) / solPrice 
  }else if (tokenOut == "eth") {
    return  Number(amountIn) / ethereumPrice
  }
  
  

  // const res = await axios.get(`https://api.nowpayments.io/v1/estimate?amount=${amountIn}&currency_from=${tokenIn}&currency_to=${tokenOut}`, {
  //   headers : {
  //     "x-api-key" : "ET8REJQ-MSD4T0X-GWV85TR-8FH8PMG"
  //   }
  // })
  // return res.data.estimated_amount
}


export const getTotalSold = async () => {
  const res = await Axios.get("bought")
  return res.data 
} 
export const getConversion2 = async () => {
  
  // await Moralis.start({apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImNjYTNlNzNkLTg0NTYtNGM2Ny1iYTU2LTNjMWMwNWU1OTFlMiIsIm9yZ0lkIjoiMzk0MjA1IiwidXNlcklkIjoiNDA1MDY1IiwidHlwZUlkIjoiMjZiM2FhMjktNTE5Yy00YzJkLWEwNzEtZWM1NDBjMDQ5NjEwIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTY5ODUzNzIsImV4cCI6NDg3Mjc0NTM3Mn0.36mQUQiN4lJAOPt5fi-4qW8bXJwNVeb60_vA7gLCLO8"})

}