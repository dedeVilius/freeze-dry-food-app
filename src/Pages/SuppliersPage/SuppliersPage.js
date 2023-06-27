import axios from "axios";
import Main from "../../Partials/Main/Main";
import { Container } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../SuppliersPage/SuppliersPage.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


const SuppliersPage = () => {

  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/suppliers/`)
      .then(res => {
        setSuppliers(res.data.toReversed());
      });
  }, []);

  const supplierItemElement = suppliers.map(supplier => {
    return (
      <div className='supplier-item-wrapper' key={supplier.id}>
        <div className='image'>
          <img src={supplier.logoUrl} alt='Supplier logo'></img>
        </div>
        <div className='description'>
          <h2>{supplier.title}</h2>
          <p>{supplier.slogan}</p>
        </div>
        <div className='contacts'>
          <h2>Contacts</h2>
          <span><FontAwesomeIcon icon={faPhone} /><Link to={`tel:` + supplier.phone}>{supplier.phone}</Link></span>
          <span><FontAwesomeIcon icon={faEnvelope} /><Link to={`mailto:` + supplier.email}>{supplier.email}</Link></span>
          <span><FontAwesomeIcon icon={faLocationDot} />{supplier.address}</span>
          <Link to={'/suppliers/' + supplier.id}><Button type='button'>Check Supplier</Button></Link>
        </div>
      </div>
    )
  })

  return (
    <Container>
      <Main>
        <h1>Suppliers</h1>
        <div className='supplier-list-wrapper'>
          {suppliers && suppliers.length > 0 ? (
            supplierItemElement
          ) : (
            <div className='no-suppliers-message'>
              <h2>There is no sincerer love than the love of food...</h2>
            </div>
          )}
        </div>
      </Main>
    </Container>
  )
}

export default SuppliersPage