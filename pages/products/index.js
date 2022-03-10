import Link from "next/link"

function ProductList({ products }) {
    return (
        <>
            <h1>List of Products :</h1>
            {
                products.map(product => {
                    return (
                        <div key = {product.id}>
                                <h3>{product.id} {product.title} {product.price}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}
export default ProductList

export async function getStaticProps() {
    console.log("Generating/regenerating")
    const response = await fetch('http://localhost:4000/products') 
    const data = await response.json()

    return {
        props: {
            products : data,
        },
        revalidate: 1,
    }
}