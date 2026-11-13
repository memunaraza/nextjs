
import Button from "../components/Button";
import FilterUser from "../components/FilterUser";
import Card from "../components/Card";
const users = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1>USERS</h1>
  <filterUsers users={data.users}/>
    </div>
  )
}

export default users