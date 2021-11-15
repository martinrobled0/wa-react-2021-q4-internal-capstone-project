import styled from "styled-components";

const Slide = styled.div`
    overflow: hidden;
    padding: 30px 0;

    .inner {
        white-space: nowrap;
        transition: transform 0.3s;
    }
  
    .Slider-item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 200px;
        color: #fff;
    }
    
    .indicators {
        display: flex;
        justify-content: center;
    }
    
    .indicators > button {

        @media (max-width: 500px) { 
            font-size: 10px;
            padding:0 15px;
        }

        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.7rem 2rem;
        font-weight: 700;
        font-size: 18px;
        text-align: center;
        text-decoration: none;
        color: #fff;
        backface-visibility: hidden;
        border: 0.3rem solid transparent;
        border-radius: 3rem;
        border-color: transparent;
        background-color: #fff;
        color: #000;
        transition: transform 0.2s cubic-bezier(0.235, 0, 0.05, 0.95);
        margin: 5px;
    }
    
    .indicators > button.active {
        background-color: #bd9e76;
        color: #fff;
    }

    .indicators > button:hover {
        transform: perspective(1px) scale3d(1.044, 1.044, 1) translateZ(0) !important;
    }
    
  
`;

export {
    Slide
}