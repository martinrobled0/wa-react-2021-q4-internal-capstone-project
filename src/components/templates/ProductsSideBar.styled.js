import styled from "styled-components";

const SideBarLayout = styled.div`
  float: right;
  width: 30%;
  margin: 0;
  padding: 0;
  .topSection{
    margin-top:50px;
    padding:5px;

    button {
    max-width: 120px;
    width: 120px;
    }
  }
  .title {
        color: #656d4a;
        font-weight: bold;
        margin-top: 30px;
        padding: 0px 60px;
        text-align: center;
        @media (max-width: 700px) {
            padding: 0;
          }

    }

  }
`;

const SideBarWrapper = styled.div`
  padding: 5px;
`;

export { SideBarLayout, SideBarWrapper };
