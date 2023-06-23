import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: String;
}

const FetchingData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
      });

    return () => controller.abort();

    // const fetchData = async () => {
    //   try {
    //     const res = await axios.get<User[]>(
    //       "https://jsonplaceholder.typicode.com/users",

    //     );
    //     setUsers(res.data);
    //   } catch (error) {
    //     setError((error as AxiosError).message);
    //   }
    // };
    // fetchData();
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
