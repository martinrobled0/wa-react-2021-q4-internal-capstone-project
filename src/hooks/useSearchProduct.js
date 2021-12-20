import { useState, useEffect } from "react";
import { API_BASE_URL } from "../utils/constants";
import { useLatestAPI } from "../utils/hooks/useLatestAPI";

export function useSearchProduct(searchTerm) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [searchResults, setSearchResults] = useState(() => ({
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
        setSearchResults({ data: {}, isLoading: true });
        const query = `[[fulltext(document,"${searchTerm}")]]`;
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&q=${encodeURIComponent(query)}&lang=en-us&pageSize=20`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setSearchResults({ data, isLoading: false });
      } catch (err) {
        setSearchResults({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, searchTerm]);

  return searchResults;
}
