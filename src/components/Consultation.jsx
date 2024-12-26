import "../styles/Consultation.css";
import consultone from "../img/consultone.png";
import ayurvedicmed from "../img/ayurvedicmed.png";
import women from "../img/women.png";
import consultationbook from "../img/consultationbook.png";
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
          <div className="diagnosis">
            <div className="child">
              <h2>Zero side-effects</h2>
              <p>
                Ayurvedic treatments are devoid of chemicals, and are based
                completely on natural herbs 
              </p>
            </div>
          </div>
          <div
            className="consultone"
            style={{
              backgroundImage: `url(${ayurvedicmed})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "293px",
              height: "274px",
            }}
          >
            {/* <img src={consultone} alt="" /> */}
          </div>
          <div className="diagnosis">
            <div className="child">
              <h2>Individual Treatment</h2>
              <p>
                all Treatments are personalized based on a person's unique
                constitution and health concerns.
              </p>
            </div>
          </div>
          <div
            className="consultone"
            style={{
              backgroundImage: `url(${women})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "293px",
              height: "274px",
            }}
          ></div>
        </div>
      </div>
      <div
        className="booking"
        style={{
          backgroundImage: `url(${consultationbook})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="book">
          <h4>Ready to restore harmony in your mind, body and spirit?</h4>
          <button className="consultbtn">Book a consultation</button>
        </div>
      </div>
    </>
  );
}

export default Consultation;
