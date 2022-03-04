// import logo from './logo.svg';
import './App.css';

const data = [
  {
    heading : "Mobile Operating System",
    l1 : "Android",
    l2 : "Blackberry",
    l3 : "iPhone",
    l4 : "Windows Phone"
  },
  {
    heading : "Mobile Manufacturers",
    l1 : "Samsung",
    l2 : "HTC",
    l3 : "Micromax",
    l4 : "Apple"
  }
];

function boxComponent(datum){
  return (
    <div>
      <h1>{datum.heading}</h1>
      <ul>
        <li>{datum.l1}</li>
        <li>{datum.l2}</li>
        <li>{datum.l3}</li>
        <li>{datum.l4}</li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {data.map(boxComponent)}
    </div>
  );
}

export default App;
