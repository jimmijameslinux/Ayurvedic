import Ayurvedic from "../components/Ayurvedic";
import Banner from "../components/Banner";
import Consultation from "../components/Consultation";
import Discover from "../components/Discover";
import Footer from "../components/Footer";
import Stories from "../components/Stories";

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
      <section className="ayurvedictogether">
        <Ayurvedic />
      </section>
      <section className="storiestogether">
        <Stories />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
