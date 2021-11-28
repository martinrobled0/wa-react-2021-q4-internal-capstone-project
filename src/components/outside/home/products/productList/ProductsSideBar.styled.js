import styled from "styled-components";

const SideBarLayout = styled.div`
  float: right;
  width: 30%;

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
