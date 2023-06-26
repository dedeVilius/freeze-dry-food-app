import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Main from "../../Partials/Main/Main";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { Button } from "react-bootstrap";
import '../SupplierPage/SupplierPage.scss';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SupplierPage = () => {

  const Title = styled.h1`
    font-size: 6rem;
    top: -58px;
  `

  const { id } = useParams();

  const [supplier, setSupplier] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/suppliers/${id}`)
      .then(res => {
        setSupplier(res.data);
      });
  }, [id]);

  const deleteHandler = () => {
    axios.delete(`${API_URL}/suppliers/${id}`)
      .then(data => navigate('/suppliers'))
  }

  const googleMapsElement = (
    <iframe src={'https://maps.google.com/maps?q=' + supplier.latitude + ',' + supplier.longtitude + '&t=&z=15&ie=UTF8&iwloc=&output=embed'}
      width="600"
      height="450"
      style={{ border: 0 }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="googleMapsFrame">
    </iframe>
  )

  return (
    <Container>
      <Main>
        <Title>{supplier.title}</Title>
        <Row className='supplier-wrapper'>
          <Col sm={8} className='left-side'>
            <div className='image'>
              <img src={supplier.logoUrl} alt='Supplier logo'></img>
            </div>
            <div className='description'>
              <p className='special'>{supplier.slogan}</p>
              <p>{supplier.description}</p>
            </div>
            <Link><Button type='button' onClick={deleteHandler}>Remove Supplier</Button></Link>
          </Col>
          <Col sm={4} className='right-side'>
            <div className='google-maps'>
              {googleMapsElement}
            </div>
            <h2>Contacts</h2>
            <div className='contacts'>
              <span><FontAwesomeIcon icon={faPhone} /><Link to={`tel:` + supplier.phone}>{supplier.phone}</Link></span>
              <span><FontAwesomeIcon icon={faEnvelope} /><Link to={`mailto:` + supplier.email}>{supplier.email}</Link></span>
              <span><FontAwesomeIcon icon={faLocationDot} />{supplier.address}</span>
            </div>
          </Col>
        </Row>
      </Main>
    </Container>
  )
}

export default SupplierPage