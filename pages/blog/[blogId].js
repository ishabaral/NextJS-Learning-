import Head from "next/head"

function Blog({ title, description }) {
return (
    <>
        <Head>
            <title>{title}</title>
            <meta name= 'description' content={description} />
        </Head>
        <h1 className='content'>Blog id: {process.env.NEXT_PUBLIC_ANALYTICS_ID}</h1>
    </>
)
}
export default Blog

export async function getServerSideProps() {
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD

    console.log(`Connecting to db :  username: ${ user}, Pass: ${password}`)

    return {
        props: {
            title: 'Blog Title',
            description: 'Blog Description',
        },
    }
}