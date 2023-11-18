//import { ComposantTestimonials } from "./ComposantTestimonial";
import { Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import testimonial1 from "../images/testimonial1.png";
import testimonial2 from "../images/testimonial2.png";
import etoile from "../images/etoile.png";
import etoieVide from "../images/star.png";

export const Testimonials = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
       
    // const teachers = [
    //     {
    //         imgUrl: testimonial1,
    //         desc: "",
    //         icone: etoile,
    //         titre: "Regina Miles",
    //         poste: "Designer"
    //     },
    //     {
    //         imgUrl: testimonial2,
    //         desc: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    //         icone: etoile,
    //         titre: "Regina Miles",
    //         poste: "Designer"
    //     }
    // ]
    return(
        <section className="container p-5">
            <div className="row ">
                <div className="col-sm-6 "> 
                    <h6 className="text-primary">Practice Advice</h6> 
                    <div className=" mt-3 lh-5">
                        <h2 className="">Our Experts Teacher</h2></div> 
                    <div className=" ">
                    <p className="lh-2 mt-3">Problems trying to resolve the conflict between 
                        the two major realms of Classical physics: Newtonian mechanics .</p>
                    </div>  
                </div> 
            </div> 
            <Row className='mx-auto mt-5'>
            <Col >
                <Carousel responsive={responsive} infinite={true} >
                    <div className="text-center">
                        <img src={testimonial1} alt="cercle" className="img-fluid rounded-circle "></img>
                        <div className=" mt-3 lh-5 px-5">
                        <p>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p></div> 
                  
                        <div className='mb-2'>
                            <img src={etoile} alt="cercle" className="img-fluid"></img>
                            <img src={etoile} alt="cercle" className="img-fluid"></img>
                            <img src={etoile} alt="cercle" className="img-fluid"></img>
                            <img src={etoieVide} alt="cercle" className="img-fluid"></img>
                        </div>
                        <h5 className='mb-2'>Regina Miles</h5>
                        <h6 className='mb-2'>Designer</h6>
                    </div>
                    <div className="text-center">
                        <img src={testimonial2} alt="cercle" className="img-fluid rounded-circle"></img>
                        <div className=" mt-3 lh-5 px-5">
                            <p>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p></div>
                        <div className='mb-2'>
                            <img src={etoile} alt="cercle" className="img-fluid"></img>
                            <img src={etoile} alt="cercle" className="img-fluid"></img>
                            <img src={etoile} alt="cercle" className="img-fluid"></img>
                            <img src={etoieVide} alt="cercle" className="img-fluid"></img>
                        </div>
                        <h5 className='mb-2'>Regina Miles</h5>
                        <h6 className='mb-2'>Designer</h6>
                    </div>
                </Carousel>
                </Col>
            </Row> 
        </section> 
    )
}
