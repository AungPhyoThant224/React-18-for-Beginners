import apiClient from "./api-client";

interface Entity {
  id: number;
}

class HttpServices {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.endPoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  delete<T>(id: number) {
    return apiClient.delete(this.endPoint + "/" + id);
  }

  create<T>(entity: T) {
    return apiClient.post(this.endPoint, entity);
  }

  update<T extends Entity>(entity: T) {
    return apiClient.patch(this.endPoint + "/" + entity.id, entity);
  }
}

export const create = (endPoint: string) => new HttpServices(endPoint);
