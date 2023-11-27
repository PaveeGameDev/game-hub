import genres from "../Data/genres";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

export const useGenres = () => ({
  data: genres,
  isLoading: false,
  error: null,
});
