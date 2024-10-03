import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  slug: string;
  id: number;
  metacritic: number;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) => {
  return useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre?.id]
  );
};

export default useGames;
