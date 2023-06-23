import { AxiosError } from "../../services/api-client";
import userService, { User } from "../../services/user-service";
import useUser from "../../hook/user-hook";

const FetchingData = () => {
  const { users, error, setUsers, setError, isLoading } = useUser();
  const deleteUser = (user: User) => {
    const originalUser = users;
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((e) => {
      setError((e as AxiosError).message);
      setUsers(originalUser);
    });
  };

  const addUser = () => {
    const originalUser = users;
    let newUser = { id: 0, name: "Mosh" };
    setUsers([...users, newUser]);

    userService
      .create(newUser)
      .then(({ data: saveUser }) => setUsers([...users, saveUser]))
      .catch((e) => {
        setError((e as AxiosError).message);
        setUsers(originalUser);
      });
  };

  const updateUser = (user: User) => {
    const originalUser = users;
    let updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((e) => {
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
            <div>
              <div
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </div>
              <div
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchingData;
