import User from "../components/User"
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
  return {
    props: { users: data }
  }
}

const UserList = ({users}) => {
  return (
    <div>
      <h1>List Of Users</h1>
      {users.map(user => (
        <User key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  )
}

export default UserList