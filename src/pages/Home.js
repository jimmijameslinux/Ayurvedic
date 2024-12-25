import Banner from "../components/Banner";
import Consultation from "../components/Consultation";
import Discover from "../components/Discover";

function Home() {
  return (
    <>
      <section className="bannertogether">
        <Banner />
      </section>
      <section className="discovertogether">
        <Discover />
      </section>
      <section className="consultationtogether">
        <Consultation />
      </section>
    </>
  );
}

export default Home;
