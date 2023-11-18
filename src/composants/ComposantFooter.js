export const ComposantFooter = (props) => {
    return(
        <div className="">
            <h3 className="">{props.titre} </h3>        
            <div className="d-flex flex-column Link">
                <a href='#a'  className="text-decoration-none text-light mb-1">{props.link1}</a>
                <a href='#a'  className="text-decoration-none text-light mb-1">{props.link2}</a>
                <a href='#a'  className="text-decoration-none text-light mb-1">{props.link3}</a>
                <a href='#a'  className="text-decoration-none text-light mb-1">{props.link4}</a>
            </div>
        </div>
        
    )
}