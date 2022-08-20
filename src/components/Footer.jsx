import Button from "react-bootstrap/Button";
const Footer = (props) => {
    return (
      <>
      <footer className="footer">
      <p>{props.parrafo}</p>
      <a href="">
      <Button variant="primary">Más información aquí</Button>{" "}
      </a>
      </footer>
      </>
    );
  };
  export default Footer;