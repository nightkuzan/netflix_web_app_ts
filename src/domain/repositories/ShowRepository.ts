import { Show } from "../entities/Show";

export interface ShowRepository {
  getAllShows(): Promise<Show[]>;
  getShowById(id: string): Promise<Show | undefined>;
}
