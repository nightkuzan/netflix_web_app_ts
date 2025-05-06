import { Show } from "../entities/Show";

export interface ShowRepository {
  getAllShows(): Show[];
  getShowById(id: string): Show | undefined;
}
