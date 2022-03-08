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
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h4>Interests</h4>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </main>
      <footer style={styleFooter}>
        <Footer
          src={'https://img.icons8.com/ios-glyphs/344/4a90e2/linkedin.png'}
        />
        <Footer
          src={'https://img.icons8.com/ios-glyphs/344/4a90e2/github.png'}
        />
        <Footer
          src={'https://img.icons8.com/ios-glyphs/344/4a90e2/twitter--v1.png'}
        />
        <Footer
          src={
            'https://img.icons8.com/ios-filled/344/4a90e2/internet-browser--v1.png'
          }
        />
      </footer>
    </div>
  );
}
