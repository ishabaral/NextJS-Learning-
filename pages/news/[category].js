function ArticleListByCategory({ articles, category }) {
    return (
        <>
            <h1>Showing  news for <i>{category}</i></h1>
            {
                articles.map(article => {
                    return (
                        <div key = {article.id}>
                            <h2>{article.id} {article.title}</h2>
                            <p>{article.description}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default ArticleListByCategory

export async function getServerSideProps(context) {
    const { params, req, res, query } = context
    // console.log(query)
    //  to get the cookies from the req we access req.headers.cookie
    // console.log(req.headers.cookie)
    // set a cookie
    // res.setHeader('Set-Cookie', ['name = Isha'])

    
    const { category } = params
    console.log(`Pre-rendering news articles for category ${category}`)
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()
      
    return {
        props: {
            articles: data, 
            category
        }
    }
}