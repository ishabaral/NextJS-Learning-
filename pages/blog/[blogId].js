import Head from "next/head"

function Blog({ title, description }) {
return (
    <>
        <Head>
            <title>{title}</title>
            <meta name= 'description' content={description} />
        </Head>
        <h1 className='content'>Blog</h1>
    </>
)
}
export default Blog

export async function getStaticPaths() {
    return {
        paths: [
            { params : { blogId: '1' }}
        ],
        fallback: false,
    }
}

export async function getStaticProps() {
    return {
        props: {
            title: 'Blog Title',
            description: 'Blog Description',
        },
    }
}