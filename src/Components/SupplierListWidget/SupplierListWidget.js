import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from '../../config';
import SupplierItemWidget from "../SupplierItemWidget/SupplierItemWidget";
import '../SupplierListWidget/SupplierListWidget.scss'
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SupplierListWidget = () => {

  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/suppliers/?_embed=fruits`)
      .then(res => {
        setSuppliers(res.data);
      });
  }, []);

  const noSuppliersMessage = (
    <div className='no-suppliers-message'>
      <blockquote>There is no sincerer love than the love of food...</blockquote>
      <Link to='vegetables'><Button type='button'>Check our food groups</Button></Link>
    </div>
  )

  if (!suppliers) {
    return noSuppliersMessage;
  }

  return (
    <div className='content-wrapper'>
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