import logo from "./logo.svg";
import "./App.css";

// import Ex1 components
import "./components/hm-1/Ex1";
import Square from "./components/hm-1/Ex1";

// import Ex2 components
import './components/hm-1/Ex2';
import CheckboxFontStyle from "./components/hm-1/Ex2";

// import Ex3 components
import './components/hm-2/Ex3';
import ButtonSignIn from "./components/hm-2/Ex3";


function App() {
  return (
    <div className="wrap">
      {/* START HM-1 */}
      <div className="home-work-title-container">
        <p>#1 Home work</p>
      </div>
      <div className="squares-container">
        <Square 
          label="BIG square" 
          cssClass="big-square" 
        />
        <Square 
          label="A less square" 
          cssClass="medium-square" 
        />
        <Square 
          label="The smallest one" 
          cssClass="small-square" 
        />
      </div>
      {/* END HM-1 */}
      {/* START HM-2 */}
      <div className="home-work-title-container">
        <p>#2 Home work</p>
      </div>
      <div className='text-container'>
        <CheckboxFontStyle />
      </div>
      {/* END HM-2 */}
      {/* START HM-3 */}
      <div className="home-work-title-container">
        <p>#3 Home work</p>
      </div>
      {/* END HM-3 */}
      <ButtonSignIn />
    </div>
  );
}

export default App;
