import yoga from "../img/yoga.png";
import heart from "../img/heart.png";
import ribbon from "../img/ribbon.png";
import lotuspos from "../img/lotuspos.png";
import protection from "../img/protection.png";
import med from "../img/med.png";
import strong from "../img/strong.png";

import "../styles/Discover.css";
function Discover() {
  return (
    <>
      {/* <h1>Discover</h1> */}
      <div className="maindiscover">
        <h2 className="title">
          Discover Ayurveda’s magic with us
          <hr className="hori" />
        </h2>
        <p className="desc">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It's like a journey to better health using
          ancient wisdom, a totally effective approach for a better life.
        </p>
      </div>
      <div className="discover">
        <div className="discoverleft">
          <div>
            <div>
              <h4 className="discovertitle">Personalized Wellness</h4>
              <p className="discoverpara">
                Get treatments made just for you based on your individual doshas
                (body type)
              </p>
            </div>
            <img className="heart" src={heart} alt="" />
          </div>
          <div>
            <div>
              <h4 className="discovertitle">Focus on prevention</h4>
              <p className="discoverpara">
                Stop problems even before they start.
              </p>
            </div>
            <img className="heart" src={ribbon} alt="" />
          </div>
          <div>
            <div>
              <h4 className="discovertitle">Mind-Body Connection</h4>
              <p className="discoverpara">
                Keep your mind and body in sync for a happy life.
              </p>
            </div>
            <img className="heart" src={lotuspos} alt="" />
          </div>
        </div>
        <div className="yoga">
          <img src={yoga} alt="" />
        </div>
        <div className="discoverright">
          <div>
            <img className="heart" src={protection} alt="" />
            <div>
              <h4 className="discovertitle">Holistic Healing</h4>
              <p className="discoverpara">
                Fix the root problem for long-lasting health.
              </p>
            </div>
          </div>
          <div>
            <img className="heart" src={med} alt="" />
            <div>
              <h4 className="discovertitle">Natural Remedies</h4>
              <p className="discoverpara">
                Using herbs and natural therapies for healing.
              </p>
            </div>
          </div>
          <div>
            <img className="heart" src={strong} alt="" />
            <div>
              <h4 className="discovertitle">Boosting immunity</h4>
              <p className="discoverpara">
                Stay strong and healthy for life, not just for today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;
