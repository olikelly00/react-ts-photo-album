import { useState } from "react";
import {
  imageList,
  ImageProps,
  ImageObject,
  holidayRecommendations,
} from "./data.js";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Title />
        <Subtitle />
        <Gallery />
        <br></br>
        <Recommendations />
      </div>
    </>
  );
}

function Title() {
  return (
    <div className="title">
      <h1>Bienvenue dans ma galerie</h1>
      <h3> Ce recueil d'images est consacré aux merveilles de l'Europe</h3>
    </div>
  );
}

function Subtitle() {
  return (
    <div className="subtitle">
      <p>Feuilletez mes photos en cliquant sur 'Suivant' en bas</p>
    </div>
  );
}
function Image({ imageIndex }: ImageProps) {
  const image: ImageObject = imageList[imageIndex];
  return (
    <>
      <img src={image.url} alt={image.alt}></img>
    </>
  );
}

function Gallery() {
  const [imageIndex, setImageIndex] = useState<number>(0);

  function handleNextClick() {
    setImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  }
  function handleBackClick() {
    setImageIndex((prevIndex) => (prevIndex - 1) % imageList.length);
  }

  return (
    <>
      <div className="gallery">
        <Image imageIndex={imageIndex} />
        <div className="buttons-container">
          {imageIndex > 0 && (
            <button onClick={handleBackClick}>Précédent</button>
          )}
          {imageIndex < imageList.length - 1 && (
            <button onClick={handleNextClick}>Suivant</button>
          )}
        </div>
      </div>
    </>
  );
}

function Recommendations() {
  const [recommendationShowing, setRecommendationShowing] =
    useState<boolean>(false);

  function toggleRecommendation() {
    recommendationShowing ? setRecommendationShowing(false) : setRecommendationShowing(true);
    console.log(recommendationShowing);
  }

  return (
    <div className="recommendations-container">
      <h3>Vous cherchez des récommendations pour votre vacance prochaine?</h3>
      <p>Pour un trésor d'astuces de routard pro...</p>
      <button onClick={toggleRecommendation}>Cliquez ici.</button>
      {recommendationShowing &&
        holidayRecommendations.map((rec) => (
          <div className="rec-container">
            <h3>{rec.location}</h3>
            <p>{rec.recommendationReason}</p>
          </div>
        ))}
      <br></br>
    </div>
  );
}

export default App;
