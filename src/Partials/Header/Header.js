import { Container } from "react-bootstrap"

const Header = ({ children }) => {
  return (
    <header>
      <Container>
        {children}
      </Container>
    </header>
  )
}

export default Header