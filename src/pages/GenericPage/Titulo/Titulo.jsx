import Image from "../../../components/Image/Image";
import "./titulo.styles.css";
export default function Titulo({ title, img }) {
  return (
    <div id="titulo">
      <span>{title}</span>
      <div>
        <Image img={img} />
      </div>
    </div>
  );
}
