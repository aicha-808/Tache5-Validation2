import { ComposantCardPricing } from "./ComposantCardPricing";
import pImg1 from "../images/pImg1.png";
import pImg2 from "../images/pImg2.png";
import pImg3 from "../images/pImg3.png";
import pImg4 from "../images/pImg4.png";
import vector from "../images/Vector.png";
import vector1 from "../images/Vector1.png";
import vector2 from "../images/Vector2.png";

export const Pricing = () => {
    return(
        <section className="container p-5">
            <div className="row ">
                <div className="col-sm-6  "> 
                    <h6 className="text-primary">Practice Advice</h6> 
                    <div className=" mt-3 lh-5">
                        <h2 className="">Make online education accessible</h2></div> 
                    <div className=" ">
                    <p className="lh-2 mt-3">Problems trying to resolve the conflict between 
                        the two major realms of Classical physics: Newtonian mechanics .</p>
                    </div>  
                </div> 
            </div> 
            <div className="row">
                <div className="col-sm-3 "> 
                    <ComposantCardPricing 
                        igm={pImg1}
                        titre="Sale"
                        vect={vector}
                        vect1={vector1}
                        vect2={vector2}
                    /> 
                </div>
                <div className="col-sm-3 "> 
                    <ComposantCardPricing 
                        igm={pImg2}
                        titre="Sale"
                        vect={vector}
                        vect1={vector1}
                        vect2={vector2}
                    /> 
                </div>
                <div className="col-sm-3 "> 
                    <ComposantCardPricing 
                        igm={pImg3}
                        titre="Sale"
                        vect={vector}
                        vect1={vector1}
                        vect2={vector2}
                    /> 
                </div>
                <div className="col-sm-3 "> 
                    <ComposantCardPricing 
                        igm={pImg4}
                        titre="Sale"
                        vect={vector}
                        vect1={vector1}
                        vect2={vector2}
                    /> 
                </div>
            </div>
        </section> 
    )
}
