import { BoutonSup } from "./BoutonSup";
import chRight from "../images/chevron-right.svg"
export const ComposantPricingBas = (props) => {
    return(
        <div className="frame p-3">
            <div className="d-flex justify-content-between align-items-center">
                <a className="text-decoration-none fw-semibold" href="#r">{props.matiere}</a> 
                <span className=" bg-dark rounded-5 p-1"><img src={props.etoile} className="img-fluid" alt="..."/>
                <span className="text-light me-1 "> {props.numbre}</span></span> 
            </div>
            <h5 className="card-title mb-3">{props.title}</h5> 
            <p className="card-title mb-3">{props.texte}</p> 
            <div className="card-title mb-3"><img src={props.fleche} className="img-fluid" alt="..."/>
                <span className="ms-2 fw-semibold"> {props.text}</span></div>  
            <h5 className="card-title mb-3">{props.montant}<span className="ms-2 text-success">{props.mont}</span></h5>
            <div className="d-flex frame1 mb-3">
                <div className="ms-1" ><img src={props.alarme} className="img-fluid" alt="..."/>
                <span> {props.text1}</span> </div> 
                <div className="ms-1"><img src={props.icon1} className="img-fluid" alt="..."/>
                <span> {props.text2}</span></div> 
                <div className="ms-1 "><img src={props.icon2} className="img-fluid" alt="..."/>
                <span> {props.text3}</span></div> 
            </div>
            <BoutonSup bckg="btn btn-transparent border border-primary px-3 mb-3 text-primary rounded-5"
                titre='Learn More' icone={chRight}>
            </BoutonSup>
        </div>
    )
}
