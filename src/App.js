import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Galería de imagenes" />
      <div className="box">
        <Card
          key="1"
          src="https://64.media.tumblr.com/df5c646156fdb8902d033da4051371d2/b169e3eff7549f58-50/s1280x1920/9f161acc4bf67a231fb592787c7728102ff6521b.jpg"
          alt="Sailor Moon Eternal"
          name="Sailor Moon Eternal"
          category="Sailor Moon es una heroína de la justicia con traje de marinero.
        Más conocida en Japón como Usagi Tsukino y en America latina como Serena Tsukino.
        Es la reencarnación de la princesa Serena de la luna que fue enviada a la tierra para cumplir su destino de salvar el mundo"
        />
        <Card
          key="1"
          src="https://64.media.tumblr.com/67636b23a09e92c5b585e59d2a18e858/b169e3eff7549f58-26/s1280x1920/83fad946ef5a656c4219d1115fbb420a7bcefee1.jpg"
          alt="Sailor Mercury de cabello celeste"
          name="Sailor Mercury"
          category="Sailor Mercury es la sailor más estudiosa, inteligente y dedicada.
        Más conocida en Japón como Ami Mizuno "
        />
        <Card
          key="1"
          src="https://64.media.tumblr.com/e9f64f88ce94b9a8e472c6da5d4adf50/b169e3eff7549f58-ad/s1280x1920/e67f9c78bc40fe07113a9e88a32073d18544cbae.jpg"
          alt="Sailor Mars de cabello negro"
          name="Sailor Mars"
          category="Sailor Mars es la reencarnación de la protectora del planeta Marte, en la tierra renace como una sacerdotiza
        que ayudará a Sailor Moon a combatir el mal con fuego.
        Mas conocida como Rei Hino "
        />
        <Card
          key="1"
          src="https://64.media.tumblr.com/264d5c2a2b6969ec8b4bbec4b4045f5d/b169e3eff7549f58-d8/s1280x1920/df5d76ae1b57fe4a0d8e7e49e4c4ede77e5a9b78.jpg"
          alt="Sailor Venus de cabello amarillo con liston rojo"
          name="Sailor Venus"
          category="Sailor Venus es la última sailor en aparecer, antes conocida como Sailor V, ayudada por su fiel amigo y gato Artemis logra unirse al grupo de sailors como la reencarnacion
        de la dama protectora del planeta Venus.
        Es torpe, enamoradisa y en Japón su nombre es Minako Aino"
        />
        <Card
          key="1"
          src="https://64.media.tumblr.com/769833bb6bdeb3a4609e6caea7835be2/b169e3eff7549f58-28/s1280x1920/0d27a0c9abf3fee8852a61c29ee9115c274a874a.jpg"
          alt="Sailor Jupiter de cabello café con traje blanco con verde"
          name="Sailor Jupiter"
          category="Sailor Jupiter es la protectora del planeta Jupiter, alta, cocinera, experta en Judo y más conocida como Makoto Kino en Japón.
        Ayuda a Sailor Moon a cumplir con la misión de salvar el mundo"
        />
      </div>
      <Footer parrafo="Anime creado por Naoko Takeuchi el año 1992 en Japón" />
    </div>
  );
}

export default App;
