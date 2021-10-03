// import "bootstrap/dist/css/bootstrap.min.css";

import { MDBContainer } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";

import "./css/footer.css";
//

function Footer() {
  return (
    <div className="footer-copyright text-center py-3" id="footer">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Javascript 401
      </MDBContainer>
    </div>
  );
}
export default Footer;
