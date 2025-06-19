import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
function footer() {
  return (
    <>
      <footer>
        <div className="icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ffffff" }}
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ffffff" }}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>

        <div className="footerInside">
          <div className="needHelp">
            <h2>NEED HELP</h2>
            <p>
              Lorem ipsum dolor sit amet. Sed rerum iure et dolor laborum est
              minus ipsa sed sint dolores. Et laudantium quia eos inventore
              quibusdam sed nemo ratione ab galisum assumenda ex.
            </p>
          </div>
          <div className="contacts">
            <h2>CONTACTS</h2>
            <a href="">vinoamigoph@yahoo.com</a>
            <a href="">+63 12345678912</a>
          </div>
        </div>
        <h2 className="copyright">
          © 2025 All Rights Reserved. By Art laurence Siojo
        </h2>
      </footer>
    </>
  );
}
export default footer;
