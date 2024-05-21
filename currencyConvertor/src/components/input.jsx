import { useState } from "react";

function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisabled = false,
    currencyDisabled = false,
    className = "", 
}){
    
    return(
        <div className={`bg-white  h-[120px]   rounded-lg relative ${className}`}>
            <h3 className="text-[18px] text-gray-500 absolute top-4 ml-4 ">{label}</h3>
            <h3 className="text-[18px] text-gray-500 absolute end-4 top-4">Currency Type</h3>
            <input 
                className="outline-none text-[18px] absolute bottom-[20px] left-[20px] bg-transparent py-1.5"
                type="number"
                placeholder="Amount"
                disabled = {amountDisabled}
                value={amount}
                onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
            />
            <div className="absolute bottom-[16px] end-[20px] outline-none px-1 py-1"> 
                <select 
                    className="bg-gray-200 rounded-md w-20 h-8 "
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisabled}
                >
                     {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                     ))}

                </select>
            </div>
        </div>
    );
}

export default Input;