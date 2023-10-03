import { useData } from "./useData";
import { Platform } from "./useGames";
export const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
