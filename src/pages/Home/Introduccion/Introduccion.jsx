import compu from "../../../assets/slider/compu.png";
import "./introduccion.css";

export default function Introduccion() {
  return (
    <div id="intro">
      <img src={compu} id="floating" alt="" />

      <div id="text">
        <h2>INTRODUCCION:</h2>
        <br />

        <p>
          La historia del desarrollo de computadores es frecuentemente referido
          a las diferentes generaciones de dispositivos de computación. Una
          generación se refiere a la mejora en el proceso de desarrollo del
          producto. Con cada generación, los circuitos han sido más pequeños y
          avanzados que en generaciones previas. Como resultado de la
          miniaturización, velocidad, poder y capacidad de memoria han crecido
          proporcionalmente. Nuevos descubrimientos están constantemente siendo
          desarrollados e influyen la forma en que vivimos, trabajamos y
          jugamos. Cada generación de computadoras es caracterizada por un mayor
          desarrollo tecnológico que fundamentalmente cambia la forma en que las
          computadoras operan, dando como resultado productos más pequeños,
          baratos, poderosos, eficientes y confiables.
        </p>
      </div>
    </div>
  );
}
