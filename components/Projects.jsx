import { Fade } from "react-reveal";

export default function Projects() {
  return (
    <div className="projects">
      <Fade delay={300}>
        <h1>Projects</h1>
      </Fade>
      <div className="projects-cont">
        <Fade delay={600}>
          <div className="box">
            <div className="project-name">
              <a href='https://dubowska.pl' target='_blank'><h3>Digital content creator portfolio</h3></a>
              <img
                className="arrow"
                alt="arrow right"
                src="/assets/arrow.png"
              ></img>
            </div>
            <div>
              <p>A personal portfolio I created for a digital content creator.
                <b> Technologies used: CSS, React.js</b>
              </p>
            </div>
          </div>
        </Fade>
        <Fade delay={900}>
          <div className="box">
            <div className="project-name">
            <a href='https://ilezarabiam.pl' target='_blank'><h3>Earnings value calculator</h3></a>
              <img
                className="arrow"
                alt="arrow right"
                src="/assets/arrow.png"
              ></img>
            </div>
            <div>
              <p>This calculator will calculate the actual value of your earnings.
                <b> Technologies used: CSS, Vanilla JS</b>
              </p>
            </div>
          </div>
        </Fade>
        <Fade delay={1200}>
          <div className="box">
            <div className="project-name">
            <a href='https://niemogebo.netlify.app' target='_blank'><h3>Random excuse generator</h3></a>
              <img
                className="arrow"
                alt="arrow right"
                src="/assets/arrow.png"
              ></img>
            </div>
            <div>
              <p>Bored of your usual excuses to go out? Check out this excuse generator. 
                <b> Technologies used: CSS, Vanilla JS.</b>
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
