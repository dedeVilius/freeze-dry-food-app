import { Container } from "react-bootstrap";
import '../SupplierListWidget/SupplierListWidget.scss'
import styled from "styled-components";


const StatisticsListWidget = () => {

  const Title = styled.h2`
  padding-top: 50px;
  text-transform: uppercase;
  letter-spacing: 3px;
`

  return (
      <div className='statistic-widget-wrapper'>
       <Title>Some statistics</Title>
      </div>
  )
}

export default StatisticsListWidget