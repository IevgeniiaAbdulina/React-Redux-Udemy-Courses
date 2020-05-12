import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Rock and Roll (Led Zeppelin)",
      duration: "4:05",
    },
    {
      title: "Back in the U.S.S.R. (Beatles)",
      duration: "3:50",
    },
    {
      title: "Hold On Tight (Electric Light Orchestra)",
      duration: "3:06",
    },
    {
      title: "Trouble (Keith Richards)",
      duration: "4:18",
    },
    {
      title: "Candy Store Rock (Led Zeppelin)",
      duration: "4:10",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
