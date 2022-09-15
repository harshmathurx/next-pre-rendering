import { useEffect, useState } from "react";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:4000/dashboard');
            const data = await res.json();
            setData(data);
            setLoading(false);
        }
        setTimeout(() => {
            fetchData();
        }, 3000);
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Posts - {data.posts}</h2>
            <h2>Likes - {data.likes}</h2>
            <h2>Followers - {data.following}</h2>
            <h2>Following - {data.followers}</h2>

        </div>
    )
}

export default Dashboard