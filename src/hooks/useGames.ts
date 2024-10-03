import useData from "./useData";

 interface Platform {
  id: number;
  metacritic: number;
}
 interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () => useData<Game>("/games");

export default useGames;
   