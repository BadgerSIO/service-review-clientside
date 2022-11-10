import useTitle from "../../customHooks/useTitle";
import BlogSec from "./BlogSec/BlogSec";
import Hero from "./Hero/Hero";
import ServiceReviewSec from "./ServiceReviewSec/ServiceReviewSec";
import ServicesSec from "./ServicesSec/ServicesSec";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Hero></Hero>
      <ServicesSec></ServicesSec>
      <BlogSec></BlogSec>
      <ServiceReviewSec></ServiceReviewSec>
    </div>
  );
};

export default Home;
