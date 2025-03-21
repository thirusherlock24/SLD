import img from "../Images/BPCL.jpeg";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          <strong>SLD PETROLEUM FUEL ENTERPRISES</strong> is the fuel delivery
          tanker truck called the <strong>(BROWSER)</strong>. It is a
          specialized tanker with a capacity of 6KL designed for transportation
          and supply of fuel (HSD). Our aim is to deliver fuel to the internal
          combustion engines of various industries, fishing boats, construction
          sites, agriculture, harbors, etc., and also to schools, colleges, and
          hospitals for use in diesel generators.
        </p>

        <p>
          SLD PETROLEUM FUEL ENTERPRISES is a partnership company owned by{" "}
          <strong>M. SATHIAVELU</strong> and <strong>S. DHEEBAN</strong>. Our
          main fuel partner is <strong>BPCL</strong>. The bowser truck is
          equipped with advanced safety features including a spill containment
          system, fire suppression equipment, PV valve, emergency valve,
          venting system, fusible link and fully complies with{" "}
          <strong>PESO</strong> regulations.
        </p>

        <h2 className="partner-heading">Our beloved partner: BPCL</h2>
        <div className="logo-container">
          <img src={img} alt="BPCL Logo" className="partner-logo" />
        </div>
      </div>
    </section>
  );
}

export default About;