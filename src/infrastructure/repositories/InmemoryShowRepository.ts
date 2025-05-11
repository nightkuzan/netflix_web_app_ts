import { Show } from "@/domain/entities/Show";
import { ShowRepository } from "@/domain/repositories/ShowRepository";
import { axiosInstance as axios } from "@/infrastructure/config/axios";

export class InMemoryShowRepository implements ShowRepository {
  async getAllShows(): Promise<Show[]> {
    try {
      const response = await axios.get("/shows");
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getShowById(id: string): Promise<Show | undefined> {
    try {
      const response = await axios.get(`/shows/${id}`);
      return response.data;
    } catch (error) {
      return undefined;
    }
  }
}
