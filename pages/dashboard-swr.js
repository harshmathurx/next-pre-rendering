import useSWR from "swr"

const fetcher = async () => {
    const res = await fetch('http://localhost:4000/dashboard');
    const data = await res.json();
    return data;
}

const DashboardSWR = () => {
    const {data,error} = useSWR('dashboard',fetcher)
    if(error) {
        return <h1>Error</h1>
    }
    if(!data) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Posts - {data?.posts}</h2>
            <h2>Likes - {data?.likes}</h2>
            <h2>Followers - {data?.following}</h2>
            <h2>Following - {data?.followers}</h2>

        </div>
    )
}

export default DashboardSWR