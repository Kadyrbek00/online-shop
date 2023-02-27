import Head from "next/head"
import Link from "next/link"
import style from "../../styles/Products/products.module.css"

export async function getStaticProps() {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { products: data }
    }
}

function Datas({ products }: any) {

    return (
        <div className={style.container}>
            <Head>
                <title>
                    All products
                </title>
            </Head>
            {products && products.map((datas: any) => {
                return (
                    <Link href={`/products/${datas.id}`} key={datas.id}>
                        <h1>{datas.category}</h1>
                        <img className={style.image} src={datas.image} alt={datas.category} />
                        <p className={style.title}>{datas.title}</p>
                        <p className={style.price}>{datas.price}$</p>
                    </Link>
                )
            })}
        </div>
    )
}
export default Datas