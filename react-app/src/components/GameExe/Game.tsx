import { useState } from "react";
import produce, { isDraft } from "immer";

const Game = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  let handleClick = () => {
    // setGame({ ...game, player: { ...game.player, name: "Bob" } });
    setGame(
      produce((draft) => {
        draft.player.name = "Bob";
      })
    );
  };

  return (
    <>
      <h3>Game</h3>
      <div>{game.id}</div>
      <div>{game.player.name}</div>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default Game;
