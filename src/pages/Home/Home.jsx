import "./EstiloPrincipal.css";
import Header from "./Header";
import Footer from "./Footer";
import Introduccion from "./Introduccion/Introduccion";
import Evolucion from "./Evolucion/Evolucion";
import Card from "./Card/Card";
import Curiosidades from "./Curiosidades/Curiosidades";
import VideoBackground from "../../components/VideoBackground";
import CommentBox from "../../components/CommentBox/CommentBox";

const Home = () => {
  return (
    <>
      <VideoBackground />
      <Header />
      <Introduccion />
      <Evolucion />

      <div id="cards">
        <Card name="charlesBabbage" />
        <Card name="alanTuring" />
        <Card name="blaisePascal" />
      </div>

      <Curiosidades />
      <CommentBox />

      <Footer />
    </>
  );
};

export default Home;
