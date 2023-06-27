import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from '../../config';
import SupplierItemWidget from "../SupplierItemWidget/SupplierItemWidget";
import '../SupplierListWidget/SupplierListWidget.scss'
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SupplierListWidget = () => {

  const Title = styled.h2`
    padding-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;
  `

  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/suppliers/?_embed=fruits`)
      .then(res => {
        setSuppliers(res.data.toReversed().toSpliced(3));
      });
  }, []);

  const noSuppliersMessage = (
    <div className='no-suppliers-message'>
      <h2>There is no sincerer love than the love of food...</h2>
      <Link to='vegetables'><Button type='button'>Check our food groups</Button></Link>
    </div>
  )

  if (!suppliers) {
    return noSuppliersMessage;
  }

  return (
    <div className='suppliers-widget-wrapper'>
      <Title>Some of our suppliers</Title>
      <div className='supplier-list'>
        <Row>
          {suppliers.map(supplier => <SupplierItemWidget data={supplier} key={supplier.id} />)}
        </Row>
      </div>
      <Link to='suppliers'><Button type='button'>More Suppliers</Button></Link>
    </div>
  )
}

export default SupplierListWidget