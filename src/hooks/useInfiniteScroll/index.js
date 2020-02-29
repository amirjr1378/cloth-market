import {useEffect, useState} from 'react';
const perPage = 7

export default function useInfiniteScroll(data) {
   
   const [items, setItems] = useState([]);
   const [page, setPage] = useState(1);
   const [hasMore, setHasMore] = useState(true);

   const loadMore = () => {
      setPage(currentPage => currentPage + 1)
      return ;
   };
   useEffect(() => {
      if(page * perPage > data.length) {
         setHasMore(false);
         const newItems= data.slice(0, data.length %( page * perPage ) )
      }
     const newItems= data.slice(0, ( page * perPage ) )
     setItems(newItems)
   },[page]);

   return {
      currentItems:items,
      loadMore, 
      page,
      hasMore
   }



};
