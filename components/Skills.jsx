import { Fade } from "react-reveal";

export default function Skills() {
  return (
    <div className="skills">
      <Fade delay={300}>
        <h1>Skills</h1>
      </Fade>
      <Fade delay={600}>
        <h2>Technologies I've been using so far</h2>
      </Fade>
      <ul className="skill-list">
        <Fade delay={900}>
            <li>HTML</li>
        </Fade>
        <Fade delay={1200}>
            <li>CSS</li>
        </Fade>
        <Fade delay={1500}>
            <li>JavaScript</li>
        </Fade>
        <Fade delay={1800}>
            <li>React.js</li>
        </Fade>
        <Fade delay={2100}>
            <li>Figma</li>
        </Fade> 
        <Fade delay={2400}>
            <li>SQL</li>
        </Fade>
      </ul>
    </div>
  );
}
