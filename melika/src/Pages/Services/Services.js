import { Button, Col, Container } from "react-bootstrap";
import { LuTable2 } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import "./Services.css";
import { useState } from "react";
import CloseButton from "./CloseButton";
import { IoCode } from "react-icons/io5";
import { PiNotePencilLight } from "react-icons/pi";
import Uxservices from "./Uxservices";
import Visualservices from "./Visualservices";
function Services() {
  const [showVisualservicesComponent, setShowVisualservicesComponent] = useState(false);
  const [showUxservicesComponent, setShowUxservicesComponent] = useState(false);
  const [showProductservicesComponent, setShowProductservicesComponent] = useState(false);
  const handelShowComponent=(title,value)=>{
  if(title=='Visualservices'){
    setShowVisualservicesComponent(value)
  }  if(title=='Uxservices'){
    setShowUxservicesComponent(value)
  }  if(title=='Productservices'){
    setShowProductservicesComponent(value)
  }
  }
  // const handleShowComponent = () => {
  //   setShowComponent(true);
  // };
  // const handleCloseComponent = () => {
  //   setShowComponent(false);
  // };
  return (
    <>
      <Container className="my-5">
        <h1 style={{marginTop:'3.8rem',textAlign:'center'}}>Services</h1>
        <p style={{color:'#a3a3a3',textAlign:'center'}}>what i offer</p>
        <div className=" stateservice">
          <Col className="servicesItem col-lg-4 col-sm-12 col-md-6 p-5">
            <p style={{ fontSize: "30px" }}>
              <LuTable2 />
            </p>
            <h3 style={{ fontFamily: "cursive", padding: "1rem 0" }}>
              Product <br /> Designer
            </h3>
            <div style={{ position: "relative" }}>
              <Button className="main-button" onClick={(title,value)=>handelShowComponent(title="Productservices",value=true)}>
                View More <FaArrowRight />
              </Button>
              <CloseButton
                show={showProductservicesComponent}
                handleClose={(title,value)=>handelShowComponent(title="Productservices",value=false)}
              />
            </div>
          </Col>
          <Col className="servicesItem col-lg-4 col-sm-12 col-md-6 p-5  between">
            <p style={{ fontSize: "30px" }}>
              <IoCode />
            </p>
            <h3 style={{ fontFamily: "cursive", padding: "1rem 0" }}>
              Ui/Ux <br />
              Designer
            </h3>
            <div style={{ position: "relative" }}>
              <Button className="main-button" onClick={(title,value)=>handelShowComponent(title="Uxservices",value=true)}>
                View More <FaArrowRight />
              </Button>
              <Uxservices
                show={showUxservicesComponent}
                handleClose={(title,value)=>handelShowComponent(title="Uxservices",value=false)}
              />
            </div>
          </Col>
          <Col className="servicesItem col-lg-4 col-sm-12 col-md-6 p-5">
            <p style={{ fontSize: "30px" }}>
              <PiNotePencilLight />
            </p>
            <h3 style={{ fontFamily: "cursive", padding: "1rem 0" }}>
              Visual <br /> Designer
            </h3>
            <div style={{ position: "relative"}}>
              <Button className="main-button"  onClick={(title,value)=>handelShowComponent(title="Visualservices",value=true)}>
                View More <FaArrowRight />
              </Button>
              <Visualservices
                show={showVisualservicesComponent}
                handleClose={(title,value)=>handelShowComponent(title="Visualservices",value=false)}
              />
            </div>
          </Col>
        </div>
      </Container>
    </>
  );
}
export default Services;
