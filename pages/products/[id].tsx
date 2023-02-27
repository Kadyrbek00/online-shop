import ProductInfo from "@/components/ProductInfo"


export async function getServerSideProps(context: any) {
    try {
        const { id } = context.params

        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()

        if (!data) {
            return {
                notFound: true
            }
        }

        return {
            props: { product: data }
        }
    } catch {
        return {
            props: { product: null }
        }
    }
}

function Product({ product }: any) {

    return <ProductInfo product={product} />
}

export default Product