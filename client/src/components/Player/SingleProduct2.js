// import React from "react";
// import { Card } from "react-bootstrap";
// import { Button, IconButton } from "@material-ui/core";
// import CloseIcon from "@material-ui/icons/Close";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import { CartState } from "../../Context/Context";
// import Music from "./Music";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPlay,
//   faPause,
//   faForward,
//   faBackward,
// } from "@fortawesome/free-solid-svg-icons";
// import Details from "./Details";
// import Controls from "./Controls";
// import ReadyPlayer from "../../ReadyPlayer";

// const SingleProduct2 = ({ item, deleteProduct }) => {
//   const {
//     state: { favorite },
//     dispatch,
//     isPlaying,
//     setIsPlaying,
//     song,
//     user1,
//     products,
//   } = CartState();

//   function noSong() {
//     if (favorite.length === 0) {
//       return favorite[1];
//     } else if (favorite.length > 1) {
//       console.log(favorite[0]);
//       return favorite.length;
//     }
//     // if (products.length === 0) {
//     //   return null;
//     // } else if (user1._id) {
//     //   return products;
//     // } else {
//     //   return null;
//     // }
//   }
//   if (user1) {
//     console.log("songs!! :", item);
//   } else {
//     console.log("no songs");
//   }
//   return (
//     <div>
//       {user1 ? (
//         <div>
//           {/* <p style={{ color: "red" }}>{("ids :", item.title)}</p> */}
//           <p style={{ color: "red" }}>{("ids :", user1._id)}</p>
//           <p style={{ color: "red" }}>gooooo</p>

//           {
//             <div className="productsOne">
//               <div>
//                 <div className="boxBody">
//                   <img
//                     variant="top"
//                     src={item.img_src}
//                     alt={item.artist}
//                     style={{ padding: "10px", borderRadius: "50%" }}
//                   />

//                   <section className="musicData">
//                     {/* <Controls setIsPlaying={setIsPlaying} /> */}

//                     <div>
//                       <p className="artist">{item.artist}</p>
//                       <h3 style={{ margin: "10px auto" }}>{item.Main}</h3>

//                       <p className="titleRecord">{item.title}</p>
//                     </div>
//                     {/* <button onClick={() => deleteProduct(item)}>DELETE</button> */}
//                     <span>
//                       {item.id !== 0 ? (
//                         <IconButton
//                           className="removeFromCart"
//                           onClick={() => {
//                             console.log(item);
//                             deleteProduct(item);
//                           }}
//                           variant="danger"
//                         >
//                           <CloseIcon />
//                         </IconButton>
//                       ) : null}
//                     </span>
//                     {/* <span>
//                   {item.id !== 0 ? (
//                     <IconButton
//                       className="removeFromCart"
//                       onClick={() => {
//                         console.log(item);
//                         dispatch({
//                           type: "REMOVE_FAVORITE",
//                           payload: item,
//                         });
//                       }}
//                       variant="danger"
//                     >
//                       <CloseIcon />
//                     </IconButton>
//                   ) : null}
//                 </span> */}
//                   </section>

//                   {/* <button
//                 className="play-btn"
//                 onClick={() => setIsPlaying(!isPlaying)}
//               >
//                 <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
//               </button> */}
//                 </div>
//               </div>
//             </div>
//           }
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default SingleProduct2;
