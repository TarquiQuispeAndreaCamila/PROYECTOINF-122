import Footer from "../Home/Footer";
import Header from "../Home/Header";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import Slider from "../../components/Slider/Slider";
import "./generic2.styles.css";
import VideoBackground from "../../components/VideoBackground";
// import m1 from "../../assets/munecos/munieco2.png";

export default function GenericPage2() {
  const { page } = useParams();

  const info = data[page];

  return (
    <div id="page2">
      <VideoBackground />
      <Header />

      <div id="titulo1">
        <div id="text_title">
          <h2>{info["titulo1"]}</h2>
          <span>{info["text1"]}</span>
        </div>
        <img src={info["img"][0]} id="muneco" alt="" />
      </div>

      <div id="section1">
        <div id="sl">
          <Slider images={info["slider2"]} />
        </div>
        <div id="text_sec">
          <h2>{info["titulo2"]}</h2>
          <span>{info["text2"]}</span>
        </div>
      </div>

      <div id="titulo2">
        <div id="title">
          <img src={info["img"][1]} alt="" />
          <h2>{info["titulo3"]} </h2>
        </div>
        <span>{info["text3"]}</span>
      </div>

      <div id="slider-text">
        <Slider images={info["slider1"]} />
        {
          // <span>{info["finalText1"]}</span>
        }
      </div>

      <div id="finalText1">
        <img src={info["img"][2]} alt="" />
        <span>{info["finalText2"]}</span>
      </div>

      <div id="finalText2">
        <h2>{info["finalTitulo"]}</h2>
        <span>{info["finalText1"]}</span>
      </div>
      <Footer />
    </div>
  );
}
