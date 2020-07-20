import styled from 'styled-components'
import defaultImg from "../images/room-1.jpeg"

const StyledHero = styled.header `
   min-height:60vh;

 //   we create the props img to pass  to the singleroom 

   background: url(${props => props.img}) center/cover no-repeat;
   display: flex;
   align-items: center;
   justify-content: center;
`;


export default StyledHero;