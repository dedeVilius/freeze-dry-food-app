import { Link } from "react-router-dom";
import '../SupplierItemWidget/SupplierItemWidget.scss'
import Col from "react-bootstrap/Col";

const SupplierItemWidget = ({ data }) => {

  const { title, fruits } = data;

  return (
    <Col className='supplier-item'>
      <h2>{title}</h2>
      {fruits.map(fruit => <Link key={fruit.id}><img src={fruit.imageUrl} alt='Fruit' ></img></Link>)}
    </Col>
  )
}

export default SupplierItemWidget