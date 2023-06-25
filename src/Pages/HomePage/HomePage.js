import Main from "../../Partials/Main/Main"
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Main classData='homePage'>
      <Container>
        <h1 className='homeTitle'>Home</h1>
      </Container>
    </Main>
  )
}

export default HomePage