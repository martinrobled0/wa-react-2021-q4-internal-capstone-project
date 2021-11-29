import styled from "styled-components";

const SearchPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;

  .noResults {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
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

  .container {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    @media (max-width: 700px) {
      padding: 0;
    }

    @media (min-width: 774px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export { SearchPageWrapper };
