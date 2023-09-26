import { useData } from "./useData";

export type Genre = {
  id: number;
  name: string;
};

export const useGenres = () => useData<Genre>("/genres");
