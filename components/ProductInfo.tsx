import Head from "next/head"
import styles from "../styles/ProductInfo/productInfo.module.css"

function ProductInfo({ product }: any) {
    const { category, description, id, image, price, rating, title } = product
    const { count, rate } = rating
    return (
        <>
            <Head>
                <title>{category}</title>
            </Head>
            <div className={styles.con}>
                <section>
                    <h2>{category}</h2>
                    <img src={image} alt={category} />
                </section>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}>{price}$</p>
                <p className={styles.count}>{count}</p>
                <p className={styles.title}>{rate}</p>
                <p className={styles.des}>{description}</p>
            </div>
        </>
    )
}

export default ProductInfo