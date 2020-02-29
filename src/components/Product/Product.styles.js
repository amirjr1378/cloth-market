import styled from 'styled-components';

export const ProductContainer = styled.div`
   height: 400px;
   display: flex;
   flex-direction: column;
`;


export const Overlay = styled.div`
   z-index:1;
   position: absolute;
   width:100%;
   height: 100%;
   top: 0;
   left:0;
   background: rgba(255,255,255,.8);
   opacity: 0;
   transition: opacity 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const AddToCart = styled.div`
   flex-grow: 1;
   position: relative;
   overflow:hidden;
   &:hover {
      ${Overlay} {
         opacity: 1;
      }
   }
`;



export const OverlayText = styled.div`
   user-select: none;
   position: absolute;
   top: 70%;
   left: 50%;
   width: 80%;
   margin: auto;
   transform: translateX(-50%);
   border: 1px solid black;
   background: white;
   opacity: .7;
   text-align: center;
   height: 50px;
   letter-spacing: 0.5px;
   line-height: 50px;
   font-size: 15px;
   text-transform: uppercase;
   font-weight: bolder;
   cursor: pointer;
   &:hover {
      background: black;
      color: white;
   }
`;

export const Background = styled.div`
   position: absolute;
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   background-image: url('${props => props.url}');
   height: 100%;
   width: 100%;
   top: 0;
   left: 0;
   right: 0;
   z-index: 0;
`

export const Description = styled.div`
   display: flex;
   justify-content: space-between;
`;
