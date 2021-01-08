import logo from "./logo.svg";
import "./App.scss";
import benblebee from "./assets/benble.png";
import bitch from "./assets/audio/bitch.m4a";
import oooh from "./assets/audio/oooh.m4a";
import yamomsahoe from "./assets/audio/yamomsahoe.m4a";
import { useEffect, useState } from "react";

function App() {
  const [benjiFace, setBenjiFace] = useState("ugly");

  let bitchAudio = new Audio(bitch);
  let ooohAudio = new Audio(oooh);
  let yamomsahoeAudio = new Audio(yamomsahoe);

  const start = (event) => {
    const likeOrDislike = event.target.id;

    if (likeOrDislike === "like") {
      ooohAudio.play();
      setBenjiFace("wink");
      setTimeout(() => {
        setBenjiFace("ugly");
        bitchAudio.play();
      }, 2000);
    } else {
      yamomsahoeAudio.play();
      setBenjiFace("angry");
      setTimeout(() => {
        setBenjiFace("ugly");
        bitchAudio.play();
      }, 2000);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Benble </h1>
        <img src={benblebee} alt="benblebee" />
      </header>

      <section>
        <div className={`benji-face angry ${benjiFace}`}></div>
        <div className="like-dislike-button">
          <i class="fas fa-heart" id="like" onClick={start}></i>
          <i class="fas fa-heart-broken" id="dislike" onClick={start}></i>
        </div>
      </section>
    </div>
  );
}

export default App;
