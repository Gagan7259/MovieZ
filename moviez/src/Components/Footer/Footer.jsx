import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css';

import { BsLinkedin, BsGithub } from "react-icons/bs";
const FooterComponent = () => {

  return (
    <>
      <footer className='myFooter'>
        <Container>
          <Row>
            <Col className=''>
              <h3 className='head_3'>Follow us :- </h3>
              <ul className='socialIconsList'>

                <li>
                  <a rel="noreferrer" href="https://www.linkedin.com/in/gagan-kumar-s-b2168a254/" target="_blank">
                    <BsLinkedin />
                  </a>
                </li>



                <li>
                  <a rel="noreferrer" href="https://github.com/Gagan7259" target="_blank">
                    <BsGithub />
                  </a>
                </li>

              </ul>

            </Col>
            <Col className='col-12'>
              <div className="footerCopyright">
                <small>© Learn Coding With Gagan , 2022. Developed and Designed  by Gagan.</small>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default FooterComponent;