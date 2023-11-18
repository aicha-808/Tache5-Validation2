export const BoutonSup = (props) => {
    return(
        <buton  className={props.bckg}>
            {props.titre}
            <img src= {props.icone} className="img-fluid text-primary" alt="..." />
        </buton>
    )
}
