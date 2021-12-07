import { Link, useParams } from "react-router-dom";
import { useGetProduct } from "../../../../../hooks/useGetProduct";
import ImageC from "../../../../../utils/modules/image/Image";
import Slider from "../../../../../utils/modules/Slider/Slider";
import { SliderItem } from "../../../../../utils/modules/Slider/SliderItem";
import {
  ProductDetailGallery,
  ProductDetailSlider,
  ProductDetailSliderWrapper,
  ProductDetailWrapper,
} from "./ProductDetailPage.styled";

export const ProductDetailPage = () => {
  let { productId } = useParams();
  const { data } = useGetProduct(productId);
  const { results } = data;

  return (
    <>
      <ProductDetailWrapper>
        <div className="bk-btn">
          <Link to="/products" className="button-80" role="button">
            Go back
          </Link>
        </div>
        {results &&
          results.map((product) => (
            <ProductDetailGallery key={product.id}>
              <label className="title">{product.data.name}</label>
              <label className="price">$ {product.data.price}</label>
              <label className="sku">sku: {product.data.sku}</label>
              <label className="category">
                category: {product.data.category.slug}
              </label>
              <ProductDetailSliderWrapper>
                <ProductDetailSlider>
                  <Slider>
                    {product.data.images &&
                      product.data.images.map((data, id) => (
                        <SliderItem key={id}>
                          <ImageC src={data.image.url} alt={data.image.alt} />
                        </SliderItem>
                      ))}
                  </Slider>
                </ProductDetailSlider>
              </ProductDetailSliderWrapper>
              <div className="paragraph">
                <p>{product.data.description[0].text}</p>
              </div>
              <div className="cart">
                <input type="number"></input>
                <button className="addCar">Add to car</button>
              </div>
              {product.data.specs &&
                product.data.specs.map((data, id) => (
                  <div className="specsTable" key={id}>
                    <div className="divRow">
                      <div className="divCell" align="center">
                        Name
                      </div>
                      <div className="divCell">Description</div>
                    </div>
                    <div className="divRow">
                      <div className="divCell">{data.spec_name}</div>
                      <div className="divCell">{data.spec_value}</div>
                    </div>
                  </div>
                ))}
            </ProductDetailGallery>
          ))}
      </ProductDetailWrapper>
    </>
  );
};
