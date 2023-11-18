import { Bouton } from './Bouton';
import '../App.css';
export const Navbar = () => {
    return(
        // <header >
            <nav className="navbar navbar-expand-lg text-light">
                <div className="container">
                    <a className="navbar-brand text-light" href="#home">BrandName</a>
                    <button className="navbar-toggler text-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon ms-end"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ms-end">
                        <li className="nav-item ">
                        <a className="nav-link active text-light" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href="#product">Product</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href="#pricing">Pricing</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <span className='me-2'>Login</span>
                        <Bouton titre='Join us' bckg="btn btn-primary py-2 px-3 ms-3"/>
                    </div>
                    </div>
                </div>
            </nav>
    )
}