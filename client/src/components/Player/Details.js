import React from "react";
import { CartState } from "../../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

function Details(props) {
  const { products, user1, currentSongIndex } = CartState();

  console.log(props.song.user);
  console.log(user1._id);
  console.log("currentSong", currentSongIndex);

  console.log(products);

  const p = products.filter((e) => {
    if (e.user === user1._id) {
      console.log("Array", e);
      return e;
    }
  });
  console.log("P :", p);

  return (
    <>
      {props.song.user === user1._id ? (
        <div>
          <div className="c-player--details">
            <div className="details-img">
              <img
                src={
                  props.song.img_src
                    ? props.song.img_src
                    : "/images/notAvailable.jpg"
                }
                alt=""
              />
            </div>
            <div>
              <h4 className="heading">Playing now</h4>
              <h3 className="details-title">{props.song.title}</h3>
              <h4 className="details-artist">{props.song.artist}</h4>
            </div>
          </div>

          <div className="c-player--controls">
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
              <FontAwesomeIcon icon={faBackward} />
            </button>
            <button
              className="play-btn"
              onClick={() => props.setIsPlaying(!props.isPlaying)}
            >
              <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
              <FontAwesomeIcon icon={faForward} />
            </button>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div className="c-player--details">
            <div className="details-img">
              <img src={"/images/notAvailable.jpg"} alt="" />
            </div>
            <div>
              <h4 className="heading">Playing now</h4>
              <h3 className="details-title">{props.song.title}</h3>
              <h4 className="details-artist">{props.song.artist}</h4>
            </div>
            <div className="c-player--controls">
              <button
                className="skip-btn"
                onClick={() => props.SkipSong(false)}
              >
                <FontAwesomeIcon icon={faBackward} />
              </button>
              <button className="play-btn">
                <FontAwesomeIcon icon={!user1 ? faPause : faPlay} />
              </button>
              <button className="skip-btn">
                <FontAwesomeIcon icon={faForward} />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Details;
