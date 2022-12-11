import Buttons from './Buttons';
import Footer from './Footer';

export default function Cuerpo(props) {
  const styleMain = {
    textAlign: 'center',
    padding: '20px',
  };
  const styleFooter = {
    height: '10%',
    padding: '10px',
    background: 'black',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: '0 0 15px 15px',
  };
  return (
    <div>
      <main style={styleMain}>
        <h2> {props.name}</h2>
        <h5>FullStack Developer</h5>
        <h5>bryanc.dev</h5>
        <Buttons />
        <h4>About</h4>
        <p>
          Hi, I'm Bryan.
          I am a highly skilled software developer with training in application development and experience in the field.
          I have a good understanding of programming languages and software development methodologies.<p> I excel at working in teams and adapting to changing work environments.
            I am looking for a job opportunity at a company where I can apply my skills and continue to grow.</p>
        </p>
        <h4>Interests</h4>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek.  Coffee fanatic.
        </p>
      </main>
      <footer style={styleFooter}>
        <a href="https://www.linkedin.com/in/bryan-cusme/" target="_blank"><Footer
          src={'https://img.icons8.com/ios-glyphs/344/4a90e2/linkedin.png'}
        /></a>
        <a href="https://www.github.com/brianc9" target="_blank"><Footer
          src={'https://img.icons8.com/ios-glyphs/344/4a90e2/github.png'}
        /></a>
        <Footer
          src={
            'https://img.icons8.com/ios-filled/344/4a90e2/internet-browser--v1.png'
          }
        />
      </footer>
    </div>
  );
}
