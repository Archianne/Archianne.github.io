import { lazy, Suspense } from "react";
import styled from "styled-components";
const Content = lazy(() => import("../__Router"));
// const SideBar = lazy(() => import("../3__SideBar"));
// const CNavBar = lazy(() => import("../5__CNavBar"));

const Main = () => {
  return (
    <StyledMain>
      <Suspense fallback={<div>Loading</div>}>
        <Content />
      </Suspense>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  height: 90vh;
  width: 100%;
  margin-top: 25px;

  @media (max-width: 768px) {
    flex-flow: column no-wrap;
    width: 100vw;

    #cNavBar {
      order: 2;
      width: 100vw;
      justify-content: start;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }

      .blank {
        display: none;
      }
    }

    #sideBar {
      order: 1;
      width: 100vw;
    }

    #content {
      order: 3;
      width: 100vw;
    }
  }
`;