import styled from 'styled-components';

const ProductCardWrapper = styled.div`
    width:340px;
    height:400px;
    transition: box-shadow .3s ease-in-out,
    top .3s ease-in-out;

    @media (max-width: 700px) { 
        width:100%;
        max-height:400px;
    }

    .ProductCard{
        &-image{
            width:340px;
            height:300px;
            @media (max-width: 700px) { 
                width:100%;
                max-width:700px;
                max-height:400px;

                min-width:300px;
                min-height:300px;
            }

            img {
                width:340px;
                height:300px;
                

                @media (max-width: 700px) { 
                    width:100%;
                    max-height:400px;

                    min-width:300px;
                    min-height:300px;
                }
            }
        }

        &-details{
            height:100px;
            background: #bd9e7661;
            width: 100%;
            display: flex;
            align-items: center;
        }

        &-product{
            width:50%;
            padding-left:5px;
        }

        &-price{
            width:50%;
            display: flex;
            justify-content:end;
            padding-right:10px;
            color: #fefae0;
            font-size:21px;
            font-weight: bold;
        }

        &-name{
            color: #414833;
            display: block;
            font-size: 1.2rem;
            font-weight: 400;
        }

        &-slug{
            color: #7f5539;
            display: block;
            font-size: .9rem;
            font-weight: 400;
        }
    }

   
`;

export {
    ProductCardWrapper
}