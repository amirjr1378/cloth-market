import styled from 'styled-components';
import {Link} from "react-router-dom";

export const DirectoryContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   width: 100%;
   
`;

export const BackgroundContainer = styled.div`
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
   transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`

export const ItemContainer = styled(Link)`
   position: relative;
   height: ${props => props.size === 'large' ? '400px':'300px'};
   width: ${props => props.size === 'large' ? '49%':'33%'};
   margin-bottom: 5px;
   cursor: pointer;
   overflow: hidden;
   &:hover {
      ${BackgroundContainer} {
         transform: scale(1.1);
      }
   }
   @media(max-width: 500px){
      width: 100%;
   }
`

export const TitleContainer = styled.div`
   position: absolute;
   display: block;
   font-size: 1.4rem;
   top: 50%;
   left: 50%;
   transform:translate(-50%);
   height: 80px;
   line-height: 80px;
   width: 120px;
   text-align: center;
   margin: auto;
   cursor: pointer;
   background-color: rgba(255,255,255, .3);
   border: 1px solid black;
`


