import React, { useRef, useEffect } from "react";
import Details from "./Details";
import { CartState } from "../../Context/Context";

function Player({ item }) {
  const {
    currentSongIndex,
    setCurrentSongIndex,

    isPlaying,
    setIsPlaying,
    products,
    user1,
  } = CartState();

  const audioEl = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const p = products.filter((e) => {
    if (e.user === user1._id) {
      console.log("Array!!!", e);
      return e;
    }
  });
  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > p.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = p.length - 1;
        }

        return temp;
      });
    }
  };

  function favoriteSongs() {
    return p[currentSongIndex] ? p[currentSongIndex].src : null;
  }

  return (
    <div className="backgroundImg">
      <div className="c-player">
        {user1 && user1._id ? (
          <>
            {" "}
            <div>
              <audio
                src={favoriteSongs() ? favoriteSongs() : null}
                ref={audioEl}
              ></audio>

              <Details
                song={
                  p[currentSongIndex]
                    ? p[currentSongIndex]
                    : "/images/notAvailable.jpg"
                }
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                SkipSong={SkipSong}
              />
            </div>
            {/* <p>
                Next up:{" "}
                <span>
                  {products[nextSongIndex].title} by{" "}
                  {products[nextSongIndex].artist}
                </span>
              </p> */}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Player;
