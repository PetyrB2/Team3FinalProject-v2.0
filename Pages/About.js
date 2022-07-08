import React from "react";
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="row  text-white">
      <p id="Listings" />
      {/* Ladislav Mudry*/}
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 bg-dark border shadow gt-2 text-center card w-25">
        <h2>Ladislav Mudry</h2>
        <hr />
        <h5>Responsibilty: FrontEnd, Risk Analysis, Documentation</h5>
        <h5>Software Specialist</h5>

        <a href="https://github.com/lmudry">
          <button className="btn btn-outline-secondary">
            <img
              src={require("../assets/images/film.webp")}
              alt="Ladislav"
              height="250"
            />
          </button>
        </a>

        <h6>A great asset to the team</h6>

        <h6>Risk Analysis and FrontEnd prodder</h6>
        <h4>
          Skills: Javascript, Java, HTML, CSS, Node.js, React.js, IT background,
          Multi-Lingual{" "}
        </h4>
        <h6>Few words: "At the moment - My github is not working!"</h6>
        <a href="https://github.com/lmudry" rel="noreferrer" target="_blank">
          <button className="btn btn-outline-secondary">My Github</button>
        </a>
      </div>

      {/* Peter Broadbent */}
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border bg-dark shadow gt-2 text-center card w-25 card-title">
        <h2>Peter Broadbent</h2>
        <hr />
        <h5>Responsibilty: FrontEnd</h5>
        <h5>Software Specialist</h5>
        <div className="w-20">
          <a
            href="https://githuvb.com/PetyrB2"
            rel="noreferrer"
            target="_blank"
          >
            <button className="btn btn-outline-secondary">
              <img
                src={require("../assets/images/glasses.jfif")}
                alt="Peter B"
              />
            </button>
          </a>
        </div>
        <h6>A great asset to the team</h6>

        <h6>Frontend poker</h6>
        <h4>
          Skills: Javascript, Java, HTML, CSS, Node.js, React.js, IT background,
          Multi-Lingual{" "}
        </h4>
        <h6>Few words: "Aha.. coffee...."</h6>
        <a href="/https://github.com/PetyrB2" rel="noreferrer" target="_blank">
          <button className="btn btn-outline-secondary">My Github</button>
        </a>
      </div>

      {/* Saad Ahmed*/}
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border bg-dark shadow gt-2 text-center card w-25">
        <h2>Saad Ahmed </h2>
        <hr />
        <h5>Responsibilty: Backend, FrontEnd, Testing</h5>
        <h5>Software Specialist</h5>

        <a
          href="https://www.instagram.com/s.aadly/"
          rel="noreferrer"
          target="_blank"
        >
          <button className="btn btn-outline-secondary">
            <img
              src={require("../assets/images/saad.jpeg")}
              alt="Saad Ahmed"
              height="250"
            />
          </button>
        </a>
        <h6>A great asset to the team</h6>

        <h6>Back End Code Smasher </h6>
        <h4>
          Skills: Javascript, Java, HTML, CSS, Node.js, React.js, IT background,
          Multi-Lingual{" "}
        </h4>
        <h6>Few words: "We can come back to that one."</h6>
        <a
          href="https://www.instagram.com/s.aadly/"
          rel="noreferrer"
          target="_blank"
        >
          <button className="btn btn-outline-secondary">My Instagram</button>
        </a>
      </div>

      {/* Jordan Lee */}
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 border bg-dark shadow gt-2 text-center card w-25">
        <h2>Jordan Lee</h2>
        <hr />
        <h5>Responsibilty: Backend, Frontend, Documentation, GitHub</h5>
        <h5>Software Specialist</h5>

        <a
          href="https://github.com/DundasBoots"
          rel="noreferrer"
          target="_blank"
        >
          <button className="btn btn-outline-secondary">
            <img
              src={require("../assets/images/Jordan.png")}
              alt="Jordan Lee"
              height="250"
            />
          </button>
        </a>
        <h6>A great asset to the team</h6>

        <h6>Scrum Master extraodinaire</h6>
        <h4>
          Skills: Javascript, Java, HTML, CSS, Node.js, React.js, IT background,
          Multi-Lingual{" "}
        </h4>
        <h6>Few words: "Hi...."</h6>
        <a
          href="https://github.com/DundasBoots"
          rel="noreferrer"
          target="_blank"
        >
          <button className="btn btn-outline-secondary">My Github</button>
        </a>
      </div>
    </div>
  );
};

export default About;
