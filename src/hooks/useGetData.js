import { useState } from "react";
import { getProductsByCategoryId } from "../selectors/getProductsByCategory";

export const useGetData = (initialState) => {
  const [data, setData] = useState(initialState);

  const reset = () => {
    setData(initialState);
  };

  const handleGetData = ({ target }) => {
    setData(getProductsByCategoryId(target));
  };

  return [data, handleGetData, reset];
};
