import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>

                    <LinkContainer to={'/'}>
                    <Navbar.Brand>MERN Auth</Navbar.Brand>                        
                    </LinkContainer>

                    <Navbar.Toggle aria-aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'> 

                        <LinkContainer to={'/login'}>
                            <Nav.Link>
                            {/* <FaSignInAlt/>  */}
                            Sign In
                            </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to={'/register'}>
                            <Nav.Link>
                            {/* <FaSignOutAlt/>  */}
                            Sign Up
                            </Nav.Link>
                        </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header