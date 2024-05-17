// using this template to create buttons as we require

import React from "react";

const Button = ({button,set}) =>{ 
    return(
        <button type="button" class=" text-white mt-2 ml-4 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        style={{backgroundColor:button }}
        onClick={() => set(button)}
        >{button}</button>
    );
}

export default Button