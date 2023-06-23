import apiClient from "./api-client";

export interface User {
  id: number;
  name: String;
}

class UserServices {
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  deleteUser(id: number) {
    return apiClient.delete("/users/" + id);
  }

  addUser(newUser: User) {
    return apiClient.post("/users", newUser);
  }

  updateUser(updatedUser: User) {
    return apiClient.patch("/users/" + updatedUser.id, updatedUser);
  }
}

export default new UserServices();

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
