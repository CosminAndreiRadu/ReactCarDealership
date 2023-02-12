import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";


const ReusableContactBar = () => {
  return (
    <div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1> You can contact us here:</h1>

        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
          
            <a style={{padding: 20}} href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebookSquare} size="10x" />
            </a>
            <a style={{padding: 20}} href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} size="10x" />
            </a>
            <a style={{padding: 20}} href="https://www.youtube.com/">
                <FontAwesomeIcon icon={faYoutube} size="10x" />
            </a>
      </div>
    </div>
  );
};
  
  export default ReusableContactBar;