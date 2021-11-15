import styled from 'styled-components';

const BannerTitle = styled.div`
width:100%
display: flex;
justify-content: start;
padding: 10px 60px;
color:#7f4f24;
font-weight: bold;
font-size:25px;
`

const BannersList = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 25px 0;
    justify-content: space-evenly;
`;

const BannerCard = styled.div`
    width: 400px;
    height: 370px;
    background: #a68a64;
    border-radius: 25px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .BannerCard{
        &-title{
            display: flex;
            width:100%;
            justify-content:center;
            font-weight: bold;
            font-size: 20px;
            padding-bottom: 10px;
            padding-top: 10px;
            max-height: 50px;
            min-height: 50px;
        }

        &-description{
            display: flex;
            width:100%;
            text-overflow: ellipsis;
            margin: 10px 0;
            overflow: hidden;
            font-size: 15px
        }
    }
`;

export {
    BannerTitle,
    BannersList,
    BannerCard
}