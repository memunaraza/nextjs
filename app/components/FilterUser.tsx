"use client"
type Users={
    id: number;
    firstName: string;
    lastName: string;
}
import { useState } from "react";
import Card from "./Card";
const filterUsers = ({users}: {users: Users[]}) => {
  const [filter, setFilter] = useState("");
  const filteredUsers = users.filter((user) => user.firstName.toLowerCase().includes(filter.toLowerCase()) || user.lastName.toLowerCase().includes(filter.toLowerCase()));
  return (
    <>
    <input type="text" placeholder="Search Users" className="bg-gray-600 text-white p-2 rounded-lg shadow-md rounded w-96 m-2" value={filter} onChange={(e) => setFilter(e.target.value)}/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {filteredUsers.map ((user: Users) => (
        <Card key={user.id} title={user.firstName} content={user.lastName}/>
      ))}
    </div>
    </>
  )
}

export default filterUsers
