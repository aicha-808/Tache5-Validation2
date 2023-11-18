export const ComposantCardHome = (props) => {
    return(
        <div className={props.backg} >
            <div className="card-body">
                <div className={props.cardimg}>
                    <img src={props.icone} className="img-fluid" alt="..." />
                </div>
                <h5 className="card-title mt-3">{props.titre}</h5>
                <div className={props.tiret}></div>
                <span className="card-text ">{props.children}</span>
            </div>
        </div>
    )
}