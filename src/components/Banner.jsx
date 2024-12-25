import i from "../img/image.png";
import "../styles/Banner.css";
import chat from "../img/chat.png";
import shield from "../img/shield.png";
import doctor from "../img/doctor.png";
import prescription from "../img/prescription.png";

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="bannerleft">{/* <h1>Banner</h1> */}</div>
        <div
          style={{ backgroundImage: `url(${i})` }}
          className="bannerright"
        ></div>
        <div className="contents">
          <p className="title">Namaste, Welcome to Amrutam</p>
          <p className="desc1">
            Step into Holistic Healing with
            <span className="underline">Ayurveda</span>
            Book Consultation with certified Experts.
          </p>
          <p className="desc2">
            Dive into the world of ayurveda and Experience Personalized Health
            Solutions and Holistic Guidance from Trusted Ayurvedic Doctors
            Anytime, anywhere.
          </p>
          <button className="contentbtn">Book an Appointment</button>
        </div>
      </div>
      <div className="services">
        <span className="service_1">
          <div className="eclipse">
            <img src={chat} alt="" />
          </div>
          <span>
            <p className="servicecontent_1">
              convenient online & In-clinic consultations
            </p>
          </span>
        </span>
        <span className="service_1">
          <div className="eclipse">
            <img src={shield} alt="" />
          </div>
          <span>
            <p className="servicecontent_1">Safe and effective treatment</p>
          </span>
        </span>
        <span className="service_1">
          <div className="eclipse">
            <img src={doctor} alt="" />
          </div>
          <span>
            <p className="servicecontent_1">
              Experienced Ayurvedic Practitioners
            </p>
          </span>
        </span>
        <span className="service_1">
          <div className="eclipse">
            <img src={prescription} alt="" />
          </div>
          <span>
            <p className="servicecontent_1">
              personalized Treatment Plans & Guidance
            </p>
          </span>
        </span>
      </div>
    </>
  );
}

export default Banner;
