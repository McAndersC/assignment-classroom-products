'use client'
import { useBasketContext } from '@/context/basket.context';
import styles from './basket.module.css'

const Basket = () => {

    const {basket} = useBasketContext();


    return (
        <pre className={styles.basket}>{basket}</pre>
    )

}

export default Basket;