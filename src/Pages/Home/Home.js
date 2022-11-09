import useTitle from "../../customHooks/useTitle";
import BlogSec from "./BlogSec/BlogSec";
import Hero from "./Hero/Hero";
import ServicesSec from "./ServicesSec/ServicesSec";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Hero></Hero>
      <ServicesSec></ServicesSec>
      <BlogSec></BlogSec>
    </div>
  );
};

export default Home;
