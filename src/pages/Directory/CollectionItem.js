import React from 'react';
import {
   ItemContainer, 
   TitleContainer,
   BackgroundContainer
} from './Directory.styles';

function CollectionItem({ imageUrl, title, linkUrl, size }) {
   return (
      <ItemContainer to={linkUrl} size={size}>
         <BackgroundContainer url={imageUrl} />
         <TitleContainer>{title}</TitleContainer>
      </ItemContainer>
   );
}



export default CollectionItem;
