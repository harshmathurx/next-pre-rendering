import { useRouter } from "next/router";

const Product = ({ product }) => {

    const router = useRouter();

    if(router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <div key={product.id}>
            <h1>{product.title} {product.price}</h1>
            <p>{product.description}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch("http://localhost:4000/products");
    const data = await res.json();
    const paths = data.map(product => {
        return {
            params: { productId: product.id.toString() }
        }
    })

    return {
        paths: [
            { params: { productId: '1' } },
        ],
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    console.log(`Regenerating product ${params.productId}`);
    const res = await fetch(`http://localhost:4000/products/${params.productId}`);
    const data = await res.json();

    if(!data.id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            product: data
        },
        revalidate: 10
    }
}
export default Product