import apiClient from "./api-client";
import { create } from "./http-service";

export interface User {
  id: number;
  name: String;
}

export default create("/users");
