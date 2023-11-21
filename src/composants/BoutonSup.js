export const BoutonSup = (props) => {
    return(
        <buton  className={props.bckg} onClick={props.onClick}>
            {props.titre}
            <img src= {props.icone} className="img-fluid text-primary ms-1" alt="..." />
        </buton>
    )
}
