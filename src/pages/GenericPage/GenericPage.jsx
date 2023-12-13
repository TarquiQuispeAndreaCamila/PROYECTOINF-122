import { useParams } from "react-router-dom";
import data from "../../data.json";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import "./styles.css";
import Slider from "../../components/Slider/Slider";
import Titulo from "./Titulo/Titulo";
import Section from "./Section/Section";
// munecos
import m1 from "../../assets/munecos/muncompufooter.png";
import m2 from "../../assets/munecos/munieco2.png";
// import m3 from "../../assets/munecos/muncompu2.png";
// import m4 from "../../assets/munecos/muncompu3good.png";
import m5 from "../../assets/munecos/WhatsApp Image 2023-12-12 at 1.04.46 AM.png";
import VideoBackground from "../../components/VideoBackground";

function GenericPage() {
  const { page } = useParams();

  console.log(page);

  const sliderImg1 = data[page]["slider1"];
  const sliderImg2 = data[page]["slider2"];

  const info = data[page];

  return (
    <div id="page">
      <VideoBackground />
      <Header />

      <Titulo title={info["titulo1"]} img={m1} />

      <Section text={info["text1"]} img={m2} />

      <Slider images={sliderImg1} />

      <div id="section2">
        <div>
          <span>{info["titulo2"]}</span>
          <p>{info["text2"]}</p>
        </div>

        <img src={data[page]["img"][0]} alt="" />
      </div>

      <div id="section3">
        <img src={data[page]["img"][1]} alt="" />
        <div>
          <span>{info["titulo3"]}</span>

          <p>{info["text3"]}</p>
        </div>
      </div>

      <div id="cards"></div>

      <Titulo title={info["finalTitulo"]} img={m5} />

      <div className="text-generic">{info["finalText1"]}</div>
      <Slider images={sliderImg2} />

      <div className="text-generic">{info["finalText2"]}</div>
      <Footer />
    </div>
  );
}

export default GenericPage;
