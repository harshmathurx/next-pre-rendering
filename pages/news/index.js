import React from 'react'

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:4000/news')
    const data = await res.json()

    return {
        props: { articles: data }
    }
}

const NewsArticleList = ({ articles }) => {
    return (
        <div>
            <h1>News Article List</h1>
            {articles?.map(article => (
                <div key={article.id}>
                    <h2>{article.title} | {article.category}</h2>
                </div>
            ))}
        </div>
    )
}

export default NewsArticleList