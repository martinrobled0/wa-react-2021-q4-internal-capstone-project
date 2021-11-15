import ImageC from '../../../utils/modules/image/Image';
import dataBanners from './../../../mocks/en-us/featured-banners'
import { BannerTitle, BannersList, BannerCard } from './FeaturedBaners.styled';

// const banners = dataFeaturedBanners.find( banner => banner.results);
const banners = dataBanners.results;

export const FeaturedBanners = () => {
    return (
        <>
            <BannerTitle>
                <p>FeaturedBanners</p>
            </BannerTitle>
            <BannersList >
                {
                    banners.map( data => (
                        <BannerCard key={data.id}>
                            <div className="BannerCard-title">
                                {data.data.title}
                            </div>
                            <div className="BannerCard-image">
                                <ImageC src={data.data.main_image.url} width="300" height="200" alt={data.data.title}/>
                            </div>
                            <div className="BannerCard-description">
                                {data.data.description[0].text}
                            </div>
                        </BannerCard>
                    ))
                }
            </BannersList>
        </>
    )
}