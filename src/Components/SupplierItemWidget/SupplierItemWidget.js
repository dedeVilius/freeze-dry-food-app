import { Link } from "react-router-dom";
import '../SupplierItemWidget/SupplierItemWidget.scss'
import Col from "react-bootstrap/Col";

const SupplierItemWidget = ({ data }) => {

  const { title, slogan, fruits } = data;

  return (
    
      <Col className='supplier-item'>
        <Link to={'/suppliers/' + data.id}>
        <div className='supplier-item-wrapper'>
          <div className='title'>
            <h2>{title}</h2>
          </div>
          <div className='slogan'>
            <p>{slogan}</p>
          </div>
        </div>
        <div className='image'>
          {fruits.map(fruit => <Link key={fruit.id}><Link to={'/suppliers/' + data.id}><img src={fruit.imageUrl} alt='Fruit' ></img></Link></Link>)}
        </div>
        </Link >
      </Col>
   

  )
}

export default SupplierItemWidget