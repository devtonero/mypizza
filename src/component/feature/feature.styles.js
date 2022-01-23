import styled from "styled-components";
import piz from "../../images/piz.jpg";
export const FeaturetContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${piz});
  height: 100vh;
  max-height: 500px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }
  p {
    font-size: clamp(1rem, 3vw, 2rem);
    margin-bottom: 1rem;
  }
`;
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  color: #000;
  background: #ffc500;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #e31837;
    cursor: pointer;
  }
`;
