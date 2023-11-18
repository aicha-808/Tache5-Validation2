import { BoutonSup } from "./BoutonSup";
import chRight from "../images/chevron-right.svg";

export const ComposantCardProduct = (props) => {
    return(
        <div className="card py-3 border-0">
            <div className="card-body">
                <div className={props.tiret}></div>
                <h5 className="card-title mt-4">{props.titre}</h5>
                <span className="card-text mt-4">{props.children}</span>
                <BoutonSup bckg="btn btn-transparent border-0  text-primary px-0 mb-3 text-primary"
                 titre='Learn More' icone={chRight}>
                </BoutonSup>
            </div>
        </div>
    )
}