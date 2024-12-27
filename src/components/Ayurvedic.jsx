import "../styles/Ayurvedic.css";

function Ayurvedic() {
  return (
    <>
      <div className="mainayurvedic">
        <h2 className="title">
          Our ayurvedic approach
          <hr className="hori" />
        </h2>
        <p className="desc">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient’s body type, medical history, and
          current health conditions.
        </p>
      </div>
      <div className="ayurvedicapproach">
        <div className="subcontent">
          <span>1</span>
          <h3>Make Appointment</h3>
          <p>
            You must make an appointment in advance, to choose the service and
            date.
          </p>
        </div>
        <div className="subcontent">
          <span>2</span>
          <h3>Consultations</h3>
          <p>
            The next stage involves a thorough consultation with an Ayurveda
            practitioner.
          </p>
        </div>
        <div className="subcontent">
          <span>3</span>
          <h3>Treatment Planning</h3>
          <p>
            The Ayurvedic practitioner creates a personalized treatment plan for
            you
          </p>
        </div>
        <div className="subcontent">
          <span>4</span>
          <h3>Maintenance</h3>
          <p>
            These visits allow for assessment of progress, adjustments to the
            treatment.
          </p>
        </div>
      </div>
    </>
  );
}

export default Ayurvedic;
