import { useRouter } from "next/router"

function ProductDetail({ productDetails }) {
    const router = useRouter()

    if(router.isFallback) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <h3>{productDetails.title}</h3>
            <p>Price: {productDetails.price}</p>
            <p>{productDetails.description}</p>
        </>
    )
}

export default ProductDetail

export async function getStaticPaths() {
    // const response = await fetch('http://localhost:4000/products')
    // const data = await response.json()
    
    // const paths = data.map(product => {
    //     return {
    //         params : {
    //             productId : `${product.id}`
    //         }
    //     }
    // })

    return {
        paths: [{ params: { productId: '1' } }],
        fallback: true
    }

    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json()
    if(!data.id) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            productDetails: data,
        },
        revalidate: 1,
    }
}