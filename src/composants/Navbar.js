import { BoutonSup } from './BoutonSup';
import chRight from "../images/Aright.png";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [scrolled, setScrolled] = useState(false);

    useEffect (() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll);

        return() => window.removeEventListener('scroll', onScroll)
    },[])

    const onUpdateActiveLink =(value) => {
            setActiveLink(value)
    }

    return(
        // <header >
            <Navbar expand="lg" className={scrolled? "scrolled": ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <span className="text-light">BrandName</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-light" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto text-light">
                            <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link': 'navbar-link'} 
                            onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#product" className={activeLink === 'product'? 'active navbar-link': 'navbar-link'} 
                            onClick={() => onUpdateActiveLink('product')}>Product</Nav.Link>
                            <Nav.Link href="#pricing" className={activeLink === 'pricing'? 'active navbar-link': 'navbar-link'}
                            onClick={() => onUpdateActiveLink('pricing')}>Pricing</Nav.Link>
                             <Nav.Link href="#sscontact" className={activeLink === 'contact'? 'active navbar-link': 'navbar-link'}
                            onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                        </Nav>
                        <div className="d-flex  contBouton">
                            <span className='me-2 text-light'>Login</span>
                            <BoutonSup  onClick={() => console.log('connect')} titre='Join us' bckg="btn btn-primary py-2 text-light" icone={chRight}/>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}