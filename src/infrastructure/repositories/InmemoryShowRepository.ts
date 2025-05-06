import { Show } from "@/domain/entities/Show";
import { ShowRepository } from "@/domain/repositories/ShowRepository";
import { shows as mockShows } from "@/data/mocks/shows";
import { axiosInstance as axios } from "@instance/axios";

export class InMemoryShowRepository implements ShowRepository {
  private shows: Show[] = mockShows;

  getAllShows(): Show[] {
    // const response = axios.get("/shows");
    return this.shows;
  }

  getShowById(id: string): Show | undefined {
    // const response = axios.get(`/shows/${id}`);
    const resonse = this.shows.find((show) => show.id === id);
    console.log(resonse);
    return this.shows.find((show) => show.id === id);
  }
}
