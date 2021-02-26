import logo from "./logo.svg";
import "./App.css";

// import Ex1 components
import "./components/hm-1/Ex1";
import Square from "./components/hm-1/Ex1";

// import Ex2 components
import './components/hm-1/Ex2';
import CheckboxFontStyle from "./components/hm-1/Ex2";


function App() {
  return (
    <div className="wrap">
      <div className="home-work-1">
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
      <div className="home-work-1">
        <p>#2 Home work</p>
      </div>
      <div className='text-container'>
        <CheckboxFontStyle />
      </div>
    </div>
  );
}

export default App;
