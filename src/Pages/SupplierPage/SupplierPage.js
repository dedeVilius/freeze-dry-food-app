import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Main from "../../Partials/Main/Main";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { Button } from "react-bootstrap";
import '../SupplierPage/SupplierPage.scss';
import styled from "styled-components";

const SupplierPage = () => {

  const Title = styled.h1`
    font-size: 6rem;
    top: -58px;
  `

  const { id } = useParams();

  const [supplier, setSupplier] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/suppliers/${id}`)
      .then(res => {
        setSupplier(res.data);
      });
  }, [id]);

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
            <Link><Button type='button'>Remove Supplier</Button></Link>
          </Col>
          <Col sm={4} className='right-side'>
            <div className='google-maps'>
              {googleMapsElement}
            </div>
            <h2>Contacts</h2>
            <div className='contacts'>
              <span><Link to={`tel:` + supplier.phone}>{supplier.phone}</Link></span>
              <span><Link to={`mailto:` + supplier.email}>{supplier.email}</Link></span>
            </div>
          </Col>
        </Row>
      </Main>
    </Container>
  )
}

export default SupplierPage