/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { API_BASE_URL } from "../utils/constants";
import { useLatestAPI } from "../utils/hooks/useLatestAPI";

export function useProductsGrid() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [allProducts, setAllProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setAllProducts({ data: {}, isLoading: true });
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&lang=en-us&pageSize=12`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setAllProducts({ data, isLoading: false });
      } catch (err) {
        setAllProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);
  return allProducts;
}
