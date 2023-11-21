import {ComposantFooter} from './ComposantFooter';
import fb from "../images/facebook.png";
import ins from "../images/instagram.png";
import twt from "../images/twiter.png";

export const Footer = () => {
    return(
        <footer className="text-light "> 
            <section className="container-fluid p-5 text-light footer mx-0">
            <div className="row ">
                <div className="col-sm-3 mb-3">
                    <div className=" getintouch">
                        <h3 className="">Get In Touch </h3> 
                        <div className="px-2"> <p className="">the quick fox jumps over the lazy dog</p> </div>
                        <div className="icone ">
                            <img src={fb} alt="media" className="img-fluid ms-2"></img>
                            <img src={ins} alt="media" className="img-fluid  ms-2"></img>
                            <img src={twt} alt="media" className="img-fluid  ms-2"></img>
                        </div> 
                    </div> 
                </div>
                <div className="col-sm-3 mb-3 "> 
                <ComposantFooter
                        titre='Company info'
                        link1="About Us"
                        link2="Carrier"
                        link3="We are hiring"
                        link4="Blog"
                    />
                </div>
                <div className="col-sm-3 mb-3 "> 
                <ComposantFooter
                        titre='Features'
                        link1="Business Marketing"
                        link2="Business Marketing"
                        link3="Live Chat"
                        link4="Unlimited Support"
                    />
                </div>
                <div className="col-sm-3 mb-3 "> 
                <ComposantFooter
                        titre='Resources'
                        fb
                        link1="IOS & Android "
                        link2="Watch a Demo"
                        link3="Customers"
                        link4="API"
                    />
                </div> 
            </div> 
        </section> 
        <div className="container text-secondary mt-4">
            <div className="row ">
                <div className="col-sm-6 textFooter">
                <p className="">Made With Love By Figmaland All Right Reserved</p>
                </div> 
            </div>
        </div>
        </footer> 
    )
}
