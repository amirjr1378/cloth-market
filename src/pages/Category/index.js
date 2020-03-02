import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems } from '../../redux/items/selector';
import Product from '../../components/Product';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import InfiniteScroll from 'react-infinite-scroller';
import {Grid} from './Category.styles.js';

function Category({ ...props }) {
   const data = useSelector(selectItems);
   const categoryType = props.match.params.name;
   const categoryData = data.find(d => d.routeName === categoryType)

   const {page, loadMore, hasMore, currentItems } = useInfiniteScroll(categoryData.items)
   console.log('categoryData.items: ', categoryData.items);

   return (
      <InfiniteScroll
         pageStart={1}
         loadMore={loadMore}
         hasMore={hasMore}
         loader={<div className="loader" key={0}>Loading ...</div>}
      >
         <Grid>
            {
               currentItems && currentItems.map((item, i) => <Product {...item} key={item + i} />)
            }
         </Grid>
      </InfiniteScroll>
   );
}


export default Category;
