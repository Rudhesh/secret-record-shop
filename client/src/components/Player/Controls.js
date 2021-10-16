// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPlay,
//   faPause,
//   faForward,
//   faBackward,
// } from "@fortawesome/free-solid-svg-icons";
// import { CartState } from "../../Context/Context";

// function Controls(props) {
//   const {
//     state: { favorite },
//     products,
//     user1,
//     setNextSongIndex,
//     currentSongIndex,
//     nextSongIndex,
//     setCurrentSongIndex,
//   } = CartState();

//   const SkipSong = (forwards = true) => {
//     products.map((e) => {
//       if (forwards && e.user === user1._id) {
//         setCurrentSongIndex(() => {
//           let temp = currentSongIndex;
//           temp++;

//           if (temp > e.length - 1) {
//             temp = 0;
//           }

//           return temp;
//         });
//       } else {
//         setCurrentSongIndex(() => {
//           let temp = currentSongIndex;
//           temp--;

//           if (temp < 0) {
//             temp = e.length - 1;
//           }

//           return temp;
//         });
//       }
//     });
//   };

//   return (
//     <div className="c-player--controls">
//       <button className="skip-btn" onClick={() => SkipSong(false)}>
//         <FontAwesomeIcon icon={faBackward} />
//       </button>
//       <button
//         className="play-btn"
//         onClick={() => props.setIsPlaying(!props.isPlaying)}
//       >
//         <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
//       </button>
//       <button className="skip-btn" onClick={() => SkipSong()}>
//         <FontAwesomeIcon icon={faForward} />
//       </button>
//     </div>
//   );
// }

// export default Controls;
