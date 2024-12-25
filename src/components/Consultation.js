import yoga from "../img/yoga.png";
import heart from "../img/heart.png";
import ribbon from "../img/ribbon.png";
import lotuspos from "../img/lotuspos.png";
import protection from "../img/protection.png";
import med from "../img/med.png";
import strong from "../img/strong.png";

import "../styles/Discover.css";
import "../styles/Consultation.css";
function Consultation() {
  return (
    <>
      {/* <h1>Discover</h1> */}
      <div className="maindiscover">
        <h2 className="title">
          What sets Ayurvedic consultations apart?
          <hr className="hori" />
        </h2>
      </div>
      <div className="consult">
        <div className="one">
          <div className="sanskrit">
            <h2>स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"</h2>
            <p>
              [ Meaning: The Goal of Ayurveda is to maintain the health of a
              healthy person and to cure the disease of a diseased person. ]
            </p>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="two">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Consultation;
