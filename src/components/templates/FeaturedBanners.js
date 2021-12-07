import { useFeaturedBanners } from "../../hooks/useFeaturedBanners";
import Slider from "../../utils/modules/Slider/Slider";
import ImageC from "../../utils/modules/image/Image";
import { SliderItem } from "../../utils/modules/Slider/SliderItem";
// import dataBanners from "./../../../../mocks/en-us/featured-banners";
import { BannerTitle } from "./FeaturedBaners.styled";

export const FeaturedBanners = () => {
  const { data } = useFeaturedBanners();
  const banners = data.results;
  return (
    <>
      <BannerTitle>
        <p>FeaturedBanners</p>
      </BannerTitle>
      <Slider>
        {banners &&
          banners.map((data) => (
            <SliderItem key={data.id}>
              <ImageC src={data.data.main_image.url} alt={data.data.title} />
            </SliderItem>
          ))}
      </Slider>
    </>
  );
};
