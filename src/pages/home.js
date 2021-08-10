import { Suspense } from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome>
      <Suspense fallback={<div>Loading</div>}>
        <h1>Hello World</h1>
      </Suspense>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    :before {
      content: "<h1>";
    }

    :after {
      content: "</h1>";
    }
  }

  img {
    width: 100%;
  }

  .views {
    width: auto;
    margin-top: 50px;
    text-align: center;
  }
`;
