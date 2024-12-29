import "../styles/Stories.css";
import expertone from "../img/expertone.png";
import expertonerate from "../img/expertonerate.png";
import degree from "../img/degree.png";
import pin from "../img/pin.png";
function Stories() {
  return (
    <>
      <div className="mainstories">
        <h2 className="title">
          Meet our Ayurveda experts
          <hr className="hori" />
        </h2>
      </div>
      <div className="stories">
        <div className="substories">
          <div className="child">
            <div className="imgcontainer">
              <img src={expertone} alt="" />
              <img src={expertonerate} alt="" />
            </div>

            <div className="storycontent">
              <h3>Dr. Vaishali sharma</h3>
              <span>Ayurveda Practitioner (BAMS, MD)</span>
              <div className="degree">
                <img className="degreei" src={degree} alt="error" />
                <span>25 years of experience</span>
              </div>
              <div className="pin">
                <img className="pini" src={pin} alt="error" />
                <span>Skin Specialist</span>
              </div>
            </div>
          </div>
          <button>Book a session</button>
        </div>
        <div className="substories">
          <div className="child">
            <div className="imgcontainer">
              <img src={expertone} alt="" />
              <img src={expertonerate} alt="" />
            </div>

            <div className="storycontent">
              <h3>Dr. Vaishali sharma</h3>
              <span>Ayurveda Practitioner (BAMS, MD)</span>
              <div className="degree">
                <img className="degreei" src={degree} alt="error" />
                <span>25 years of experience</span>
              </div>
              <div className="pin">
                <img className="pini" src={pin} alt="error" />
                <span>Skin Specialist</span>
              </div>
            </div>
          </div>
          <button>Book a session</button>
        </div>
        <div className="substories">
          <div className="child">
            <div className="imgcontainer">
              <img src={expertone} alt="" />
              <img src={expertonerate} alt="" />
            </div>

            <div className="storycontent">
              <h3>Dr. Vaishali sharma</h3>
              <span>Ayurveda Practitioner (BAMS, MD)</span>
              <div className="degree">
                <img className="degreei" src={degree} alt="error" />
                <span>25 years of experience</span>
              </div>
              <div className="pin">
                <img className="pini" src={pin} alt="error" />
                <span>Skin Specialist</span>
              </div>
            </div>
          </div>
          <button>Book a session</button>
        </div>
      </div>
    </>
  );
}

export default Stories;
