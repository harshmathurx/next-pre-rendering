import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps(context) {
    const { query } = context;
    const {category} = query;
    const queryString = category ? `category=${category}` : '';
    const res = await fetch(`http://localhost:4000/events?${queryString}`);
    const data = await res.json();
    return {
        props: {
            events: data,
        }
    };
}


const EventsList = ({events}) => {
    const [data,setData] = useState(events);
    const [search,setSearch] = useState('');
    const router = useRouter();

    const fetchSportsEvents = async () => {
        const res = await fetch(`http://localhost:4000/events?category=${search}`);
        const data = await res.json();
        setData(data);
        router.push(`/events?category=${search}`,undefined,{shallow:true});
    }

  return (
    <div>
        <h2>Filter Events</h2>
        <input type="text" onSubmit={fetchSportsEvents} value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={fetchSportsEvents}>Submit</button>
        <h1>Events List</h1>
        {data?.map(event => (
            <div key={event.id}>
                <h2>{event.title} | {event.category}</h2>
                <p>{event.date}</p>
            </div>
        ))}
    </div>
  )
}

export default EventsList