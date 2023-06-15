'use client'

import { createContext, useContext, useEffect, useState } from "react";

const BasketContext = createContext({});

export const BasketContextProvider = ({children}) => {

    const [basket, setBasket] = useState([]);

    const addToBasket = (id) => {

        if(basket.indexOf(id) !== -1) {
            return
        };

        setBasket([...basket, id])

    }

    const removeFromBasket = (id) => {

        console.log('removeFromBasket', id)

    }


    return (
        <BasketContext.Provider value={{basket, addToBasket, removeFromBasket}}>
            {children}
        </BasketContext.Provider>
    )

}

export const useBasketContext = () => useContext(BasketContext)