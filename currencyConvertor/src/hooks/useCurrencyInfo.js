import { useState,useEffect } from "react";


function useCurrencyInfo(currency){
    let [data, setData] = useState({})
    currency = currency.toUpperCase();
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/552067aafd12846ed3c97cff/latest/${currency}`)
        .then((res)=> res.json())
        .then((res)=> setData(res["conversion_rates"]))
    },[currency]) 
    // console.log(data)
    return data;
}

export default useCurrencyInfo;