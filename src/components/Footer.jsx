import Button from "react-bootstrap/Button";
const Footer = (props) => {
    return (
      <>
      <footer className="footer">
      <p>{props.parrafo}</p>
      <a href="https://es.wikipedia.org/wiki/Sailor_Moon">
      <Button variant="Secondary">Más información aquí</Button>
      </a>
      </footer>
      </>
    );
  };
  export default Footer;