import { Fade } from "react-reveal";

export default function Contact() {
  return (
    <div className="contact">
      <Fade delay={300}>
        <h1>Contact</h1>
      </Fade>
      <Fade delay={600}>
        <h2>
          Thanks for stopping by! If you enjoyed my portfolio and would like to
          get to know me, let's get in touch.
        </h2>
      </Fade>
      <ul className="contact-list">
        <Fade delay={900}>
          <div className="contact-name">
          <a href='mailto:aleksandra.losowska@gmail.com'>
            <li>aleksandra.losowska@gmail.com</li>
          </a>
            <img
              className="arrow"
              alt="arrow right"
              src="/assets/arrow.png"
            ></img>
            
          </div>
        </Fade>
        <Fade delay={1200}>
          <div className="contact-name">
          <a href='https://www.linkedin.com/in/aleksandra-losowska/' target='_blank'>
            <li>Linkedin</li>
             </a>
            <img
              className="arrow"
              alt="arrow right"
              src="/assets/arrow.png"
            ></img>
           
          </div>
        </Fade>
        <Fade delay={1500}>
          <div className="contact-name">
            <a href='https://github.com/aleksandra-a-a-a' target='_blank'>
            <li>Github</li>
            </a>
            <img
              className="arrow"
              alt="arrow right"
              src="/assets/arrow.png"
            ></img>
            
          </div>
        </Fade>
      </ul>
    </div>
  );
}
