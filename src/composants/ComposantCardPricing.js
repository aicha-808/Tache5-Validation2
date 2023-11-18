import { ComposantPricingBas } from "./ComposantPricingBas";
import etoile from "../images/etoile.png"
import fleche from "../images/flech.svg"
import alarm from "../images/coolicon.png"
import icon1 from "../images/Vector4.png"

export const ComposantCardPricing = (props) => {
    return(
        <div className="card mt-5 border-0">
            <img src={props.igm} className="card-img p-relative" alt="..."/>
            <div className="card-img-overlay">
            <h5 className="card-title bg-danger w-25 text-center text-light">{props.titre}</h5>
            <div className="icones d-flex g-2 ">
                <span className=" cercle bg-light">
                    <img src={props.vect} className="img-fluid" alt="..."/>
                </span>
                <span className="cercle bg-light">
                    <img src={props.vect1} className="img-fluid  " alt="..."/>
                </span>
                <span className="cercle bg-light">
                    <img src={props.vect2} className="img-fluid " alt="..."/>
                </span>
            </div>
            </div>
            <ComposantPricingBas
                matiere="English"
                etoile={etoile} numbre={4.9}
                title="Graphic Design"
                texte="We focus on ergonomics and meeting you...."
                fleche={fleche} text='15 Sales'
                montant='$16.48' mont='$6.48'
                alarme={alarm} text1='Pro...' icon1={icon1} text2='64 Les...' icon2={alarm} text3='22 hr..'
            />
        </div>
        
    )
}