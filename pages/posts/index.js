import Link from 'next/link';
import React from 'react'

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: { posts: data }
    }
}

const PostsList = ({ posts }) => {
    return (
        <div>
            <h1>List Of Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <Link href={`posts/${post.id}`} passHref>
                        <h3>{post.title}</h3>
                    </Link>
                        <hr />
                </div>
            ))}
        </div>
    )
}

export default PostsList