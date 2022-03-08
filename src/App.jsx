import logo from './logo.svg';
import './App.css';

import Cuerpo from './components/Cuerpo';
import Photo from './components/Photo';
//import Buttons from './components/Buttons';

function App(props) {
  return (
    <div className="card">
      <Photo link={props.link} className="card--photo" />
      <Cuerpo name={props.name} link={props.link} className="cuerpo" />
    </div>
  );
}
export default App;
