import styled from 'styled-components';

export const DropdownContainer = styled.div`
   z-index: 2;
   position: absolute;
   top: 80px;
   right: 30px;
   width: 300px;
   height: 350px;
   overflow-y: auto;
   display: flex;
   flex-direction: column;
   border: 1px solid black;
   background: white;
   padding-top: 20px;
   padding-right: 20px;
   padding-left: 5px;
   @media ( max-width: 700px ) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
   }
   
`;

export const DropdownItemContainer = styled.div`
   margin-top: 10px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
`
export const EmptyMessage = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
`

export const CloseButton = styled.div`
   position: absolute;
   top: 5px;
   right: 20px;
   cursor:pointer;
   font-size: 30px;
`

export const Description = styled.div`
   display: flex;
   flex-grow:1;
   align-items: center;
`

export const Img = styled.img`
   width: 50px;
   height: 50px;
`


export const Quantity = styled.div`
   display: flex;
   flex-grow:1;
   align-items: center;
   justify-content: center;
   font-size: 20px;
`



