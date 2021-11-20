import ImageC from "../../../../utils/modules/image/Image";
import Slider from "../../../../utils/modules/Slider/Slider";
import { SliderItem } from "../../../../utils/modules/Slider/SliderItem";
import dataBanners from "./../../../../mocks/en-us/featured-banners";
import { BannerTitle } from "./FeaturedBaners.styled";

// const banners = dataFeaturedBanners.find( banner => banner.results);
const banners = dataBanners.results;

export const FeaturedBanners = () => {
  return (
    <>
      <BannerTitle>
        <p>FeaturedBanners</p>
      </BannerTitle>
      <Slider>
        {banners.map((data) => (
          <SliderItem key={data.id}>
            <ImageC src={data.data.main_image.url} alt={data.data.title} />
          </SliderItem>
        ))}
      </Slider>
    </>
  );
};
