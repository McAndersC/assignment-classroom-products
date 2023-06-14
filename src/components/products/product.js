import Image from "next/image";
import styles from './products.module.css'

const Product = () => { 

    return (<div className={styles.product}>
        <div className={styles.productHeader}>
            <Image src="/3.jpg" width={'1024'} height={'768'} alt="logo"></Image>
            <div className={styles.discount}>
                <div>TILBUD 50%</div>
            </div>
        </div>
        <div className={styles.productContent}>
            <div>
                <h1>Product</h1>
                <p>
                    En produktbeskrivelse er en tekst, 
                    man har ved sine produkter. Den 
                    fungerer som en form for 
                    salgstekst, der skal beskrive...
                </p>
            </div>
            <div className={styles.productFooter}>
                <div>
                    <h2>Pris</h2>
                    <p>68 kr.</p>
                </div>
                <div>
                    <button>ACTION</button>
                    <button>ACTION</button>
                </div>
            </div>
        </div>
        
    </div>)

}

export default Product;