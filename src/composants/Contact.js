import { Bouton } from './Bouton';
export const Contact = () => {
    return(
        <section className="container p-5" id="contact">
            <div className="row text-center ">
                <div className="col-sm-6 mx-auto "> 
                    <h6 className="text-primary">Practice Advice</h6> 
                    <div className=" mt-3 lh-5">
                        <h2 className="">Featured Products</h2></div> 
                    <div className=" ">
                    <p className="lh-2 mt-3">Problems trying to resolve the conflict between 
                        the two major realms of Classical physics: Newtonian mechanics .</p>
                    </div>  
                </div> 
            </div> 
            <div className="row text-center mt-5">
                <div className="col-sm-8 mx-auto ">
                    <div className="input-group">
                        <input type="text" class="form-control"  placeholder="Your Email" required/>
                        <Bouton titre='Subscribe' bckg="btn btn-primary py-2 px-3"/>
                    </div>  
                </div>  
            </div> 
        </section> 
    )
}
