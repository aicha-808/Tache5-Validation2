import { ComposantCardProduct } from "./ComposantCardProduct";
import rectangle  from "../images/img3.png";
import image1  from "../images/img1.png";
import image3  from "../images/img2.png";

export const Product = () => {
    return(
        <section className="container p-5 text-light ">
            <div className="row ">
                <div className="col-sm-5 cardPro1 "> 
                    <ComposantCardProduct 
                    titre="Packages that are aprodable"
                    tiret="trait mt-4"> 
                    <p className="mt-4">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>
                    </ComposantCardProduct> 
                </div>
                <div className="col-sm-7 cardPro2"> 
                    <div className="imagePositionL">
                        <img src= {image1} className="img-fluid" alt="..." />
                    </div>
                    <div className="imagePositionM text-center">
                        <img src= {rectangle} className="img-fluid " alt="..." />
                    </div> 
                    <div className="imagePositionR">
                        <img src= {image3} className="img-fluid" alt="..." />
                    </div>
                </div>
            </div>
        </section>
    )
}