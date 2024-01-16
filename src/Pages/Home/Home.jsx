import Author from "../../Component/Author/Author";
import Gain from "../../Component/Gain/Gain";
import Hero from "../../Component/Hero/Hero";
import Include from "../../Component/Include/Include";
import Thisbook from "../../Component/Thisbook/Thisbook";
import "../Home/Home.scss";

const Home = () => {
  return (
    <div>
      <>
        <Hero />
        <Gain />
        <Include />
        <Thisbook />
        <Author />
      </>
    </div>
  );
};

export default Home;
