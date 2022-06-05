import { ADD_MOVIE, GETRATE, GETTITLE } from "../types/movietypes";

const initialeState = {
  movies: [
    {
      title: "Jujutsu Kaisen 0",
      description:
        "Yuta Okkotsu, a high schooler who gains control of an extremely powerful Cursed Spirit and gets enrolled in the Tokyo Prefectural Jujutsu High School by Jujutsu Sorcerers to help him control his power and keep an eye on him.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BYzFmMjAwMDYtNzM0Zi00NjY2LWFjMjYtMGQ1OTRiZjk5YjJkXkEyXkFqcGdeQXVyMTMwODY5NDc2._V1_.jpg",
      rate: 5,
      frameUrl: "https://www.youtube.com/embed/2docezZl574",
      id: 1,
    },
    {
      title: "Demon Slayer the Movie: Mugen Train",
      description:
        "After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamado's journey as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, on track to despair.",
      posterUrl:
        "https://musicart.xboxlive.com/7/2ab25100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      rate: 3,
      frameUrl: "https://www.youtube.com/embed/ATJYac_dORw",
      id: 2,
    },
    {
      title: "Weathering with You",
      description:
        "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg",
      rate: 5,
      frameUrl: "https://www.youtube.com/embed/Q6iK6DjV_iE",
      id: 3,
    },
    {
      title: "Your name",
      description:
        "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Your_Name_poster.png/220px-Your_Name_poster.png",
      rate: 2,
      frameUrl: "https://www.youtube.com/embed/xU47nhruN-Q",
      id: 4,
    },
    {
      title: "A Silent Voice: The Movie",
      description:
        "A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg",
      rate: 1,
      frameUrl: "https://www.youtube.com/embed/nfK6UgLra7g",
      id: 5,
    },
    {
      title: "A Whisker Away",
      description:
        "Miyo Sasaki is in love with her classmate Kento Hinode and tries repeatedly to get Kento's attention by transforming into a cat, but at some point, the boundary between herself and the cat becomes ambiguous.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Nakitai_Watashi_wa_Neko_o_Kaburu_poster.png/220px-Nakitai_Watashi_wa_Neko_o_Kaburu_poster.png",
      rate: 5,
      frameUrl: "https://www.youtube.com/embed/aXc9DVfLTGo",
      id: 6,
    },
    {
      title: "Hunter X hunter",
      description:
        "The strongest Hunters that once existed in the Hunter Association were split into light and dark, and each walked down their respective paths. The dark side begins moving in order to massacre all Hunters! After a brutal attack from the dark side Hunters, Killua is injured and Kurapika is almost dead. What is the real goal behind the attack on all the Hunters?",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/b/b3/Hunter_x_Hunter_The_Last_Mission_poster.png?20180131220619",
      rate: 4,
      frameUrl: "https://www.youtube.com/embed/d6kBeJjTGnY",
      id: 7,
    },
    {
      title: "The Garden of Words",
      description:
        "A 15-year-old boy and 27-year-old woman find an unlikely friendship one rainy day in the Shinjuku Gyoen National Garden.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Garden_of_Words_poster.png/220px-Garden_of_Words_poster.png",
      rate: 1,
      frameUrl: "https://www.youtube.com/embed/KoA4vYlfoc4",
      id: 8,
    },
    {
      title: "Summer Wars",
      description:
        "A student tries to fix a problem he accidentally caused in OZ, a digital world, while pretending to be the fiancé of his friend at her grandmother's 90th birthday.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Summer_Wars_poster.jpg/220px-Summer_Wars_poster.jpg",
      rate: 2,
      frameUrl: "https://www.youtube.com/embed/UbmdYasVDDg",
      id: 9,
    },
    {
      title: "Your Lie in April",
      description:
        "A piano prodigy who lost his ability to play after suffering a traumatic event in his childhood is forced back into the spotlight by an eccentric girl with a secret of her own.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Your_Lie_in_April_Manga_cover.png/220px-Your_Lie_in_April_Manga_cover.png",
      rate: 3,
      frameUrl: "https://www.youtube.com/embed/3aL0gDZtFbE",
      id: 10,
    },
    {
      title: "Rascal Does Not Dream of Bunny Girl Senpai",
      description:
        "The seemingly normal life of Sakuta Azusagawa, a high school student changes drastically when he meets a wild bunny girl that seems to be invisible to others.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Seishun_Buta_Yar%C5%8D_light_novel_volume_1_cover.jpg/220px-Seishun_Buta_Yar%C5%8D_light_novel_volume_1_cover.jpg",
      rate: 4,
      frameUrl: "https://www.youtube.com/embed/o0TZj_d3Yfg",
      id: 11,
    },
    {
      title: "Violet Evergarden",
      description:
        "In the aftermath of a great war, Violet Evergarden, a young female ex-soldier, gets a job at a writers' agency and goes on assignments to create letters that can connect people.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Violet_Evergarden_light_novel_volume_1_cover.jpg/220px-Violet_Evergarden_light_novel_volume_1_cover.jpg",
      rate: 3,
      frameUrl: "https://www.youtube.com/embed/BUfSen2rYQs",
      id: 12,
    },
  ],
  searchTitle: "",
  searchRate: "",
};

const movieReducer = (state = initialeState, action) => {
  switch (action.type) {
    case GETTITLE:
      return {
        ...state,
        searchTitle: action.payload,
      };
    case GETRATE:
      return {
        ...state,
        searchRate: action.payload,
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    default:
      return state;
  }
};
export default movieReducer;
