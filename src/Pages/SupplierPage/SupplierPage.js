import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Main from "../../Partials/Main/Main";

const SupplierPage = () => {

  const { id } = useParams();

  return (
    <Container>
      <Main>
        <h1>{id}</h1>
      </Main>
    </Container>
  )
}

export default SupplierPage