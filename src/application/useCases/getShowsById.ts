import { ShowRepository } from "@/domain/repositories/ShowRepository";

export const getShowsById = async (showRepository: ShowRepository, id: string) => {
  const show = await showRepository.getShowById(id);
  return show;
};