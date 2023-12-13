import "./card.css";
import data from "../dataPersonajes.json";

export default function Card({ name }) {
  const info = data[name];

  return (
    <div id="card">
      <span>{info["name"]}</span>

      <img id="img_person" src={info["img"]} alt="image" />

      <p id="bio">{info["text"]}</p>
    </div>
  );
}
