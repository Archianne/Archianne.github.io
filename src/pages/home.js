import { Suspense } from "react";
import styled from "styled-components";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  return (
    <StyledHome>
      <Suspense fallback={<div>Loading</div>}>
        <TypeWriterEffect
          multiText={[
            "<h1> Hello World </h1>",
            "<div> Archianne </div>",
            "<p> Front-end developer </p>",
            "<h1> Hello World </h1>",
          ]}
          cursorColor="#3F3D56"
          startDelay={500}
          multiTextDelay={1000}
          typeSpeed={70}
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
