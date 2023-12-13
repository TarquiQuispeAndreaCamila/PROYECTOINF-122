import Slider from "../../../components/Slider/Slider";
import img1 from "../../../assets/slider/photo1.jpeg";
import img2 from "../../../assets/slider/photo2.jpeg";
import img3 from "../../../assets/slider/photo3.jpeg";
import img4 from "../../../assets/slider/photo4.jpeg";
import img5 from "../../../assets/slider/photo5.jpeg";
import "./evolucion.css";

export default function Evolucion() {
  const images = [img1, img2, img3, img4, img5];
  return (
    <div id="evol">
      <div id="text_evol">
        <h2>Evolucion de las Computadoras</h2>
        <br />
        <p>
          Durante muchos años, o mejor dicho durante muchos siglos la humanidad
          careció de un instrumento que lo ayude a procesar y archivar
          informacion. Un computador o computadora es una maquina utilizada por
          el hombre para desempeñar diversas funciones, si hablamos del origen
          del computador nos tendríamos que remontar hasta la edad antigua
          cuando los hombres vivían en las cavernas, como sabemos el hombre
          primitivo no contaba con ningún medio para realizar cálculos y
          operaciones, se dice por ejemplo que para contar los frutos que
          recolectaba usaba pajillas o piedras, siempre fue una necesidad para
          el ser humano el tener conocimiento de cuanto alimento tenia y cuanto
          estaba utilizando, porque de esa manera sabría si va a poder
          sobrevivir los duros inviernos de aquella época, en esta época el
          comercio era nulo, luego fue avanzando hasta que se comenzaron a
          realizar trueques entre una y otra tribu, a medida que el trueque
          avanzo y la sociedad también es cuando aparece el dinero y por ello la
          necesidad de un instrumento que pueda dar cálculos exactos de lo que
          obtenía.
        </p>
      </div>
      <div className="slider">
        <Slider images={images} />
      </div>
    </div>
  );
}
