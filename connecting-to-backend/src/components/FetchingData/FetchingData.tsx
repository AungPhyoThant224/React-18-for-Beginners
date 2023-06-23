import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: String;
}

const FetchingData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (error) {
        setError((error as AxiosError).message);
      }
    };
    fetchData();

    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => {
    //     setUsers(res.data);
    //   })
    //   .catch((e) => {
    //     setError(e.message);
    //   });
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchingData;
