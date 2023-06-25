import StatisticsListWidget from "../../Components/StatisticsListWidget/StatisticsListWidget";
import SupplierListWidget from "../../Components/SupplierListWidget/SupplierListWidget";
import Main from "../../Partials/Main/Main"
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
    <Main classData='homePage'>
      <Container>
        <h1 className='homeTitle'>Home</h1>
        <SupplierListWidget />
      </Container>
    </Main>
    <StatisticsListWidget />
    </>
  )
}

export default HomePage