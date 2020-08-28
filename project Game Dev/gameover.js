import { setScreen } from "./index.js";

class GameoverScreen extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("GameoverScreen").content.cloneNode(true)
    );
    this._shadowRoot.querySelector("#replay").addEventListener("click", () => {
      setScreen("");
    });
    this._shadowRoot.querySelector("#home").addEventListener("click", () => {
      setScreen("");
    });
    this._shadowRoot
      .querySelector("#leaderboard")
      .addEventListener("click", () => {
        setScreen("leaderboard");
      });
  }
}

customElements.define("gameover-screen", GameoverScreen);
