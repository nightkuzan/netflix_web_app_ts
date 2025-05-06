import { ShowRepository } from "@/domain/repositories/ShowRepository";

export const getShows = async (showRepository: ShowRepository) => {
  const shows = await showRepository.getAllShows();
  return shows;
};
