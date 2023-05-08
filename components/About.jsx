import { Fade } from "react-reveal"

export default function About() {
    return (
    
        <div className="about">
            
            <Fade delay={200}>
                <h1>My name is Aleksandra.</h1>
             </Fade>    
             <Fade delay={500}>
                <h2>I am a Frontend Developer.</h2>
             </Fade>
            <Fade delay={900}> 
                <p>After getting a wide experience in customer service I have decided to switch my career. I am fluent in <b>HTML</b> and <b>CSS</b> with a strong foundation in <b>JavaScript</b> and <b>React</b>. I have a passion for niche, artsy and eye-grabbing designs.</p>
           </Fade> 
        </div>
       
    )
    
}