import {renderHook, act, } from '@testing-library/react-hooks';
import useInfiniteScroll from "./index";

test('test infinite scroll hooks work correctly', async() => {
  const data = [1,2,3,4,5,6,7,8,9,10]
  const {result, waitForNextUpdate} = renderHook(() => useInfiniteScroll(data))


  expect(result.current.currentItems).toStrictEqual(data.slice(0,7))
  expect(result.current.page).toBe(1);
  expect(result.current.hasMore).toBe(true);

  act(() => result.current.loadMore());
  expect(result.current.page).toBe(2);
  expect(result.current.currentItems).toStrictEqual(data)


})


