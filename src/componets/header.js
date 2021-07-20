import { Navbar,Nav,Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import firebase from "../firebase";
const HeaderCmp=()=>{
  const logOut=()=>{
    firebase.auth().signOut();
  }
    return(
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >Navbar</Navbar.Brand>
    <Nav className="me-auto">
       
      <Nav.Link > <Link to ='/jokes' style={{textDecoration:'none',color:'rgba(255,255,255,.55)'}}>Jokes</Link></Nav.Link>
     
    </Nav>
    <Nav className="justify-content-end">
      <Nav.Link onClick={()=>{
        logOut()

      }}><Link to ='/login' style={{textDecoration:'none',color:'rgba(255,255,255,.55)'}}>Logout</Link></Nav.Link>
     </Nav>
    </Container>
    </Navbar>
    )
}
export default HeaderCmp;