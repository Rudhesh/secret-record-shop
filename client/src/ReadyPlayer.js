import { useEffect } from "react";
import Player from "./components/Player/Player";
import { CartState } from "./Context/Context";
import "./index.css";
function ReadyPlayer() {
  const {
    state: { favorite },
    setSong,
    currentSongIndex,
    setCurrentSongIndex,
    nextSongIndex,
    setNextSongIndex,
  } = CartState();

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > favorite.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="player">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={favorite}
      />
    </div>
  );
}

export default ReadyPlayer;
