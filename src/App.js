import "./App.css";
import Card from "./components/Card";


function App() {
  return (
    <div className="App">
      <Card
        key="1"
        src="https://i.pinimg.com/564x/20/dd/36/20dd365bfd2d994ce1d8d813458a1aef.jpg"
        alt="Imagen de fondo"
        name="ciudad"
        category="ciudad con fondo morado"
      />
    </div>
  );
}

export default App;
