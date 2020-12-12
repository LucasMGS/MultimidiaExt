import React from "react";
import "./styles.css";
import image1 from "../../assets/images/imagem1.jpg";
import image2 from "../../assets/images/imagem2.jpg";
import video1 from "../../assets/videos/eminem.mp4";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="video-title-container">
        <h2>Videos</h2>
      </div>
      <div className="video-container">
        <iframe
          width="470"
          height="315"
          src="https://www.youtube.com/embed/8DyziWtkfBw"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <iframe
          width="470"
          height="315"
          src="https://www.youtube.com/embed/JePnQ1gSagc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <video width="470" height="315" autoPlay muted>
          <source src={video1} type="video/mp4" />
        </video>
      </div>

      <div className="image-title-container">
        <h2>Imagens</h2>
      </div>
      <div className="images-container">
        <img src={image1} width="250" height="400" />
        <img src={image2} width="250" height="400" />
      </div>
    </>
  );
}
