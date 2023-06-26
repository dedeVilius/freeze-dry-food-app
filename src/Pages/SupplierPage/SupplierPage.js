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

  return (
    <Container>
      <Main>
        <Title>{supplier.title}</Title>
        <Row className='supplier-wrapper'>
          <Col className='left-side'>
            <div className='image'>
              <img src={supplier.logoUrl} alt='Supplier logo'></img>
            </div>
            <div className='description'>
              <p className='special'>{supplier.slogan}</p>
              <p>{supplier.description}</p>
            </div>
            <Link><Button type='button'>Remove Supplier</Button></Link>
          </Col>
          <Col className='right-side'>
            <h2>Contacts</h2>
            <span><Link></Link></span>
            <span><Link></Link></span>
            <span><Link></Link></span>
          </Col>
        </Row>
      </Main>
    </Container>
  )
}

export default SupplierPage