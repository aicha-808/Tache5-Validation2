import { Bouton } from "./Bouton";
import { ComposantCardHome } from "./composantCardHome";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icone3.png";

export const Home = () => {
    return(
      <header>
        <section className="container p-5 text-light">
          <div className="row ">
            <div className="col-sm-6 mx-auto text-center"> 
              <h4 className="text-primary">Welcom</h4> 
              <div className="contH1 mx-auto w-75 mt-3 lh-5"><h1 className="">Selling on the internet like a pro</h1></div> 
              <div className=" ">
                <p className="contH1 mx-auto  w-75 lh-2 mt-3">We know how large objects will act,but things on a small scale just do not qct that way.</p>
              </div>
              <div className="mt-4">
                <Bouton titre='Get Quote Now' bckg="btn btn-primary mb-3"/>
                <Bouton titre='Learn More' bckg="btn btn-transparent ms-2 border-1 border-primary text-primary px-3 mb-3" />
              </div>  
            </div> 
          </div> 
          <div className="row mt-5">
            <div className="col-sm-4 mb-3"> 
              <ComposantCardHome 
                cardimg="cardimg1"
                icone={icon1}
                titre="Training Courses"
                tiret="trait mt-3"
                backg=" card p-3 bg-light"> 
               {
                <p p className="mt-3">The gradual accumulation of information about atomic and small-scale behaviour.</p>
                }
              </ComposantCardHome> 
            </div> 
            <div className="col-sm-4 mb-3"> 
            <ComposantCardHome 
              cardimg="cardimg2"
                icone={icon2}
                titre="2,769 online courses"
                tiret="trait mt-3"
                backg=" card p-3 bg-light"> 
              {
                <p p className="mt-3">The gradual accumulation of information about atomic and small-scale behaviour.</p>
              }
              </ComposantCardHome> 
            </div>
            <div className="col-sm-4 mb-3"> 
              <ComposantCardHome 
                cardimg="cardimg3" 
                icone={icon3}
                titre="Training Courses"
                tiret="traitS mt-3"
                backg=" card p-3 bg-primary text-light">
                {
                  <p className="mt-3">The gradual accumulation of information about atomic and small-scale behaviour.</p>
                }
              </ComposantCardHome> 
            </div>
          </div> 
        </section>
      </header>
    )
}