import "./gameover.js";
import "./leaderboard.js";

const screenMap = {
  gameover: "<gameover-screen></gameover-screen>",
  replay: "<main-screen></main-screen>",
  home: "<home-screen></home-screen>",
  leaderboard: "<leaderboard-screen></leaderboard-screen>",
};

const setScreen = (screenName) => {
  document.getElementById("game").innerHTML = screenMap[screenName];
};

setScreen("gameover");

export { setScreen };
