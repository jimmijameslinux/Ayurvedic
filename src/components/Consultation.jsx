import "../styles/Consultation.css";
import consultone from "../img/consultone.png";
function Consultation() {
  return (
    <>
      {/* <h1>Discover</h1> */}
      <div className="mainconsult">
        <h2 className="title">
          What sets Ayurvedic consultations apart?
          <hr className="hori" />
        </h2>
      </div>
      <div className="consult">
        <div className="one">
          <div className="sanskrit">
            <div className="child">
              <h2>स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"</h2>
              <p>
                [ Meaning: The Goal of Ayurveda is to maintain the health of a
                healthy person and to cure the disease of a diseased person. ]
              </p>
            </div>
          </div>
          <div className="consultone">
            <img src={consultone} alt="" />
          </div>
          <div className="diagnosis">
            <div className="child">
              <h2>precise diagnosis</h2>
              <p>
                Ayurveda's core principles revolve around Vata, Pitta, and Kapha
                doshas, guiding you with precise diagnosis and treatment.
              </p>
            </div>
          </div>
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
