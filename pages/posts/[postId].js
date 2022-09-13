import { useRouter } from "next/router";

const Post = ({ post }) => {

    const router = useRouter();

    if(router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    const paths = data.map(post => {
        return {
            params: { postId: post.id.toString() }
        }
    })

    return {
        paths: [
            { params: { postId: '1' } },
            { params: { postId: '2' } },
            { params: { postId: '3' } },
        ],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();

    if(!data.id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post: data
        }
    }
}
export default Post