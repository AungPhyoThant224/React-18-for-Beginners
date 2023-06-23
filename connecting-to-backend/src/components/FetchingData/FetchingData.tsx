import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: String;
}

const FetchingData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError(e.message);
        setLoading(false);
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

  const deleteUser = (user: User) => {
    const originalUser = users;
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users" + user.id)
      .catch((e) => {
        setError((e as AxiosError).message);
        setUsers(originalUser);
      });
  };

  const addUser = () => {
    const originalUser = users;
    let newUser = { id: 0, name: "Mosh" };
    setUsers([...users, newUser]);

    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(({ data: saveUser }) => setUsers([...users, saveUser]))
      .catch((e) => {
        setError((e as AxiosError).message);
        setUsers(originalUser);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <div className="btn btn-primary mb-3" onClick={() => addUser()}>
        Add
      </div>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchingData;
