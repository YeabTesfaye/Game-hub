import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

function GameGrid() {
  const { error, games } = useGames();
  return (
    <>
      {error && (
        <Text color="red.500" fontWeight={"bold"} mb={4}>
          {error}
        </Text>
      )}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
