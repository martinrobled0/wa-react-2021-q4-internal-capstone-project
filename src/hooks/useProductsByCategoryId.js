/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { API_BASE_URL } from "../utils/constants";
import { useLatestAPI } from "../utils/hooks/useLatestAPI";

export const useProductsBycategoryId = (categories) => {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [productsFiltered, setProductsFiltered] = useState(() => ({
    data: {},
    isLoading: true,
  }));
  const [queryCategories, setQueryCategories] = useState(categories);
  useEffect(() => {
    setQueryCategories(categories);
  }, [categories]);
  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setProductsFiltered({ data: {}, isLoading: true });
        const query = `[[any(my.product.category, ["${queryCategories}"])]]`;
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&lang=en-us&pageSize=12&q=${encodeURIComponent(query)}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setProductsFiltered({ data, isLoading: false });
      } catch (err) {
        setProductsFiltered({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, queryCategories]);

  return productsFiltered;
};
