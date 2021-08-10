import { Suspense } from "react";
import styled from "styled-components";
import usePath from "../components/_Hooks/usePath";

const Home = () => {
  const TxtRotate = function (element, toRotate, period) {
    this.toRotate = toRotate;
    this.element = element;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.element.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    const that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

window.onload = () => {
  const elements = document.getElementsByClassName("txt-rotate");
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute("data-rotate");
      const period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  };

  return (
    <StyledHome>
      <Suspense fallback={<div>Loading</div>}>
        <h1>
          Hello{" "}
          <span
            className="txt-rotate"
            data-period="2000"
            data-rotate='[ "World", "JS", "React", "You!" ]'
          ></span>
        </h1>
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
