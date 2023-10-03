import { useData } from "./useData";
type Platform = {
  id: number;
  name: string;
  slug: string;
};

export const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
