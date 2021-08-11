import { Suspense } from "react";
import styled from "styled-components";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  return (
    <StyledHome>
      <Suspense fallback={<div>Loading</div>}>
        <TypeWriterEffect
          startDelay={2000}
          cursorColor="#3F3D56"
          multiText={[
            "<h1> Hello World </h1>",
            "Front-end developer",
            "Archianne",
            "<h1> Hello World </h1>",
          ]}
          multiTextDelay={0}
          typeSpeed={30}
        />
      </Suspense>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;

  h1 {
    font-size: 30px;
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
