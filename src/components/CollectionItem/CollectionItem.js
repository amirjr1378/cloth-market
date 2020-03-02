import React from 'react';
import {
   ItemContainer, 
   TitleContainer,
   BackgroundContainer
} from './styles';

function CollectionItem({ imageUrl, title, linkUrl, size }) {
   return (
      <ItemContainer to={linkUrl} size={size} data-testid="directory-link">
         <BackgroundContainer url={imageUrl} />
         <TitleContainer>{title}</TitleContainer>
      </ItemContainer>
   );
}



export default CollectionItem;
