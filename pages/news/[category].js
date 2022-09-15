import React from 'react'

export const getServerSideProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:4000/news?category=${params.category}`)
    const data = await res.json()

    return {
        props: { articles: data,category: params.category }
    }
}

const ArticleListByCategory = ({ articles,category }) => {
    return (
        <div>
            <h1>Articles for {category}</h1>
            {articles?.map(article => (
                <div key={article.id}>
                    <h2>{article.title} | {article.category}</h2>
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ArticleListByCategory