import Image from "../../../components/Image/Image";
import "./section.styles.css";

export default function Section({ img, text }) {
  return (
    <div id="sect">
      <img src={img} id="img-sect" alt="" />

      <span>{text}</span>
    </div>
  );
}
