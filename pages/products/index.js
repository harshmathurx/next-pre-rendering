import Link from 'next/link';
import React from 'react'

export async function getStaticProps() {
    console.log("Regenerating products");
    const res = await fetch('http://localhost:4000/products');
    const data = await res.json();

    return {
        props: { products: data },
        revalidate: 10
    }
}

const ProductsList = ({ products }) => {
    return (
        <div>
            <h1>List Of products</h1>
            {products.map(post => (
                <div key={post.id}>
                    <Link href={`products/${post.id}`} passHref>
                        <h3>{post.title} {post.price} </h3>
                    </Link>
                        <hr />
                </div>
            ))}
        </div>
    )
}

export default ProductsList