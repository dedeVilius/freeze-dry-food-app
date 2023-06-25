import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from '../../config';
import SupplierItemWidget from "../SupplierItemWidget/SupplierItemWidget";
import '../SupplierListWidget/SupplierListWidget.scss'
import Row from 'react-bootstrap/Row';
import { Button } from "react-bootstrap";

const SupplierListWidget = () => {

  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/suppliers/?_embed=fruits`)
      .then(res => {
        setSuppliers(res.data);
      });
  }, []);

  return (
    <div className='content-wrapper'>
      <div className='supplier-list'>
        <Row>
          {suppliers.map(supplier => <SupplierItemWidget data={supplier} key={supplier.id} />)}
        </Row>
      </div>
      <Button type='button'>More Suppliers</Button>
    </div>
  )
}

export default SupplierListWidget