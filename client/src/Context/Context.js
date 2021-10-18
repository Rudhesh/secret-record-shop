import React, { useContext, useEffect, useReducer, useState } from "react";
import { cartReducer, productReducer } from "./Reducers";

const ShoppingCart = React.createContext();

export const Context = ({ children }) => {
  const songs = [
    {
      id: 2,
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      genre: "Pop",
      format: "Vinyl  LP",
      img_src: "/images/song-1.jpg",
      src: "./music/on-n-on.mp3",
      price: 44,
      genre: "Hip Hop",
    },

    {
      id: 3,
      title: "somebody-new",
      artist: "Artist 2",
      genre: "Pop",
      format: "Vinyl  LP",
      img_src: "/images/song-2.jpg",
      src: "./music/somebody-new.mp3",
      price: 44,
      rating: 3,
    },
    {
      id: 4,
      title: "on-n-on",
      artist: "Artist 3",
      genre: "Pop",
      format: "Vinyl  12",
      img_src: "/images/song-3.jpg",
      src: "./music/on-n-on.mp3",
      price: 44,
      rating: 3,
    },
    {
      id: 5,
      title: "Fidelity Radio Club",
      artist: "S.Fidelity",
      genre: "Electronic / Dance",
      format: 'Vinyl 12"',
      releaseDate: 2021,
      img_src: "/images/S.Fidelity2.jpg",
      src: "./music/Heuse & Tom Wilson - Ignite [NCS Release].mp3",
      price: 12.99,
      rating: 4,
    },

    {
      id: 6,
      title: "A Safe Place To Be Naked",
      artist: "S.Fidelity",
      genre: "Hip Hop",
      format: "Vinyl LP",
      releaseDate: 2017,
      img_src: "/images/S.Fidelity3.jpg",
      src: "./music/Midranger - Apocalypse [NCS Release].mp3",
      price: 15.29,
      rating: 5,
    },

    {
      id: 7,
      title: "IGOR",
      artist: "Tyler, The Creator",
      genre: "Hip Hop",
      format: "Vinyl LP",
      releaseDate: 2019,
      img_src: "/images/Tyler.jpg",
      src: "./music/PPP (feat. Harleighblu).mp3",
      price: 34.99,
      rating: 5,
    },

    {
      id: 8,
      title: "Stylish Tantrum",
      artist: "Roza Terenzi",
      genre: "Electronic / Dance",
      format: 'Vinyl 12"',
      releaseDate: 2020,
      img_src: "/images/RozaTerenzi.jpg",
      src: "./music/Roza Terenzi - That Track (Rewired Mix)",
      price: 11.99,
      rating: 2,
    },

    {
      id: 9,
      title: "Summer Love Gherking Jerks Aka Larry Heard Remixes",
      artist: "Basic Realities",
      genre: "Electronic / Dance",
      format: 'Vinyl 12"',
      releaseDate: 2021,
      img_src: "/images/LarryHeard.jpg",
      src: "/music/Roza Terenzi - That Track (Rewired Mix).mp3",
      price: 10.99,
      rating: 3,
    },

    {
      id: 10,
      title: "I Can Make You A Big Freak",
      artist: "Paul Johnson",
      genre: "Electronic",
      format: 'Vinyl 12"',
      releaseDate: 2020,
      img_src: "/images/PaulJ.jpg",
      src: "",
      price: 9.99,
      rating: 4,
    },
    {
      id: 11,
      title: "Sweet Nothing Feat. Ebony Rose",
      artist: "Vibration Black Finger",
      genre: "	Pop",
      format: 'Vinyl 7"',
      releaseDate: 1985,
      img_src: "/images/EbonyRose.jpeg",
      src: "",
      price: 8.24,
      rating: 4,
    },

    {
      id: 12,
      title: "Spacer Woman",
      artist: "Charlie",
      genre: "Electronic",
      format: 'Vinyl 12"',
      releaseDate: 2018,
      img_src: "/images/Charlie.jpg",
      src: "",
      price: 13.5,
      rating: 5,
    },

    {
      id: 13,
      title: "Straight From The Heart",
      artist: "Patrice Rushen",
      genre: "Pop",
      format: "Vinyl LP",
      releaseDate: 1982,
      img_src: "/images/PatriceRushen.jpg",
      src: "",
      price: 26.99,
      rating: 2,
    },

    {
      id: 14,
      title: "Gee Wiz",
      artist: "Doctor's Cat",
      genre: "Pop",
      format: "Vinyl LP",
      releaseDate: 1984,
      img_src: "/images/DoctorsCat.jpg",
      src: "",
      price: 26.99,
      rating: 2,
    },
    {
      id: 15,
      title: "4 The Heartbroken",
      artist: "Ottonian",
      genre: "Pop",
      format: "Vinyl LP",
      releaseDate: 2017,
      img_src: "/images/Ottonian.jpg",
      src: "",
      price: 15.99,
      rating: 3,
    },
    {
      id: 16,
      title: "Deep Inside (Remixes)",
      artist: "Hardrive",
      genre: "Pop",
      format: 'Vinyl 12"',
      releaseDate: 1995,
      img_src: "/images/hardDrive.jpg",
      src: "",
      price: 8.99,
      rating: 5,
    },
    {
      id: 17,
      title: "Millionaire",
      artist: "Kelis feat André 300",
      genre: "hip Hop",
      format: 'Vinyl 12"',
      releaseDate: 2004,
      img_src: "/images/Kelis.jpg",
      src: "",
      price: 10.49,
      rating: 5,
    },

    {
      id: 18,
      title: "My Body. My Future.",
      artist: "Kristy Harper",
      genre: "Pop",
      format: "Vinyl LP",
      releaseDate: 2006,
      img_src: "/images/Kristy.jpg",
      src: "",
      price: 7.89,
      rating: 3,
    },

    {
      id: 19,
      title: "Virgin Ubiquity II",
      artist: "Roy Ayers",
      genre: "Jazz",
      format: "Vinyl 3LP",
      releaseDate: 2005,
      img_src: "/images/RoyAyers.jpg",
      src: "",
      price: 33.99,
      rating: 2,
    },

    {
      id: 20,
      title: "Black Focus",
      artist: "Yussef Kamaal",
      genre: "Jazz",
      format: "Vinyl LP",
      releaseDate: 2016,
      img_src: "/images/YussefKamal.jpg",
      src: "",
      price: 17.99,
      rating: 5,
    },

    {
      id: 21,
      title: "Waiting EP",
      artist: "Hidden Spheres",
      genre: "Electronic",
      format: 'Vinyl  12"',
      releaseDate: 2015,
      img_src: "/images/HiddenSpheres.jpg",
      src: "",
      price: 39.99,
      rating: 4,
    },
    {
      id: 22,
      title: "Primary",
      artist: "Kari Faux",
      genre: "Hip Hop",
      format: "Vinyl  LP",
      releaseDate: 2007,
      img_src: "/images/KariFaux.jpg",
      src: "",
      price: 19.99,
      rating: 3,
    },

    {
      id: 23,
      title: "Pop song",
      artist: "Artist 4",
      genre: "Pop",
      img_src: "/images/song-4.jpg",
      src: "./music/file_example_MP3_1MG.mp3",
      price: 44,
      rating: 3,
    },

    {
      id: 24,
      title: "Midranger - Apocalypse",
      artist: "Artist 5",
      genre: "Pop",
      format: "Vinyl  LP",
      img_src: "/images/alive.jpg",
      src: "./music/Midranger - Apocalypse [NCS Release].mp3",
      price: 76,
      rating: 3,
    },
    {
      id: 25,
      title: "me too ft. Halsey",
      artist: "Gun Kelly",
      format: "Vinyl  LP",
      genre: "Pop",
      img_src: "/images/song-1.jpg",
      src: "./music/on-n-on.mp3",
      price: 34,
      rating: 3,
    },
    {
      id: 26,
      title: "fun",
      artist: "byan ",
      format: "Vinyl  LP",
      genre: "Jazz",
      img_src: "/images/song-2.jpg",
      src: "./music/somebody-new.mp3",
      price: 94,
      rating: 3,
    },
    {
      id: 27,
      title: "Shakedown",
      artist: "Clarx",
      img_src: "/images/shakedown.jpg",
      format: "Vinyl  LP",
      genre: "Jazz",
      price: 34,
      type: "electronic",
      src: "./music/Clarx - Shakedown [NCS Release].mp3",
    },
    {
      id: 28,
      title: "Games Worldbeat",
      artist: "Bernardo R.",
      img_src: "/images/notAvailable.jpg",
      format: "Vinyl  LP",
      genre: "Jazz",
      price: 34.99,

      type: "instrumental",
      src: "./music/mixkit-games-worldbeat-466.mp3",
    },
    {
      id: 29,
      title: "OverMyHead",
      artist: " ROY KNOX",
      img_src: "/images/over-my-head-1602154826-mOiKzOJDe6.jpg",
      format: "Vinyl  LP12",
      genre: "Jazz",
      price: 34,
      src: "./music/ROY KNOX -  Over My Head (Feat. Mike Robert) [NCS Release].mp3",
    },
    {
      id: 30,
      title: "Want You (feat. Sara Skinner)",
      artist: "Subtact, Sara Skinner",
      img_src: "/images/want-you-feat-sara-skinner-1586956276-s4lOrfrHQj.jpg",
      lang: "ENGLISH",
      format: "Vinyl  LP",
      genre: "Hip hop",
      price: 29.99,
      timesPlayed: 0,
      type: "electronic",
      src: "./music/Subtact - Want You (feat. Sara Skinner) [NCS Release].mp3",
    },
    {
      id: 31,
      title: "Apocalypse",
      artist: "Midranger",
      img_src: "/images/apocalypse-1600776027-tsCmgK4gEU.jpg",
      format: "Vinyl  LP",
      genre: "Hip hop",
      price: 29.99,
      type: "electronic",
      src: "./music/Midranger - Apocalypse [NCS Release].mp3",
    },
    {
      id: 32,
      title: "Impact Moderato",
      artist: "Kevin MacLeod",
      img_src: "/images/notAvailable.jpg",
      lang: "ENGLISH",
      format: "Vinyl  LP",
      genre: "Hip hop",
      price: 29.99,
      timesPlayed: 0,
      src: "./music/impact.mp3",
    },
    {
      id: 33,
      title: "Impact Moderato 2",
      artist: "Kevin MacLeod",
      img_src: "/images/notAvailable.jpg",
      lang: "ENGLISH",
      format: "Vinyl  LP",
      genre: "Hip hop",
      price: 29.99,
      src: "./music/impact2.mp3",
    },
    {
      id: 34,
      title: "Ignite",
      artist: "Tom wilson, Heuse",
      img_src: "/images/ignite-1600419626-nHn4WXY79q.jpg",
      lang: "ENGLISH",
      timesPlayed: 0,
      format: "Vinyl  LP",
      genre: "Hip hop",
      price: 29.99,
      type: "electronic",
      src: "./music/Heuse & Tom Wilson - Ignite [NCS Release].mp3",
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    favorite: [],
    songs: songs,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    searchQuery: "",
  });

  const [song, setSong] = useState(songs);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  const [show, setShow] = useState(false);

  const [user, setUser] = useState({ artist: "", email: "" });
  const [error, setError] = useState("");

  const Logout = () => {
    setUser({ name: "", email: "" });
    console.log("Logout");
  };

  const [styling, setStyling] = useState("light");

  const [login1, setLogin1] = useState(true);

  const [user1, setLoginUser1] = useState({});

  const [products, setProducts] = useState([]);

  const [login, setLogin] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  return (
    <div>
      <ShoppingCart.Provider
        value={{
          user1,
          setLoginUser1,
          login1,
          setLogin1,
          state,
          dispatch,
          productState,
          productDispatch,
          show,
          setShow,
          song,
          setSong,
          currentSongIndex,
          setCurrentSongIndex,
          nextSongIndex,
          setNextSongIndex,
          user,
          setUser,
          error,
          setError,
          Logout,
          isPlaying,
          setIsPlaying,
          styling,
          setStyling,
          products,
          setProducts,
          login,
          setLogin,
        }}
      >
        {children}
      </ShoppingCart.Provider>
    </div>
  );
};

export default Context;

export const CartState = () => {
  return useContext(ShoppingCart);
};
