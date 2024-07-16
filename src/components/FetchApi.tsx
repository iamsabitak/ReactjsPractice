import React, { useEffect, useState } from "react";

interface userdata {
  name: string;
  id: number;
}
const FetchApi: React.FC = () => {
  const [user, setUser] = useState<userdata[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
      setUser(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>fetch api aand display the name</h1>
      {user.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default FetchApi;
