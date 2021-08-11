import Markdown from "markdown-to-jsx";
import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BlogPost = ({ match }) => {
  const [data, setData] = useState("");
  var slug = match.params.slug;
  console.log(slug);

  (async () => {
    const response = await fetch(
      `https://gist.githubusercontent.com/Archianne/${slug}/raw/`
    );
    const data = await response.text();
    console.log(data);
    setData(data);
  })();

  return (
    <StyledPosts>
      <Suspense fallback={<div>Loading..</div>}>
        <div id="return">
          <Link to="/blog">Return</Link>
        </div>
        <Markdown>{data}</Markdown>
      </Suspense>
    </StyledPosts>
  );
};

export default BlogPost;

const StyledPosts = styled.article`
  width: 70vw;
  max-width: 800px;
  margin: 0 auto;
  overflow-x: hidden;

  #return {
    text-align: center;
    margin-bottom: 40px;
  }

  #title {
    text-align: center;
    font-size: 25px;
    margin-bottom: 20px;
    box-shadow: ${(props) => props.theme.fontColor1} 0px 1px 0px,
      ${(props) => props.theme.fontColor1} 0px 1px 0px inset;
  }

  p {
      margin: 30px 0;
    img {
      width: 100%;
      margin: 0;
      box-shadow: ${(props) => props.theme.fontColor1} 0px 1px 4px;
    }
  }

  a {
    color: orange;
    text-decoration: none;
    font-weight: bold;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 30px 0 30px 20px;
    color: ${(props) => props.theme.fontColor1};
  }

  hr {
    margin: 30px 0;
    background-color: ${(props) => props.theme.boxBorder} !important;
    border: none;
    height: 1px;
    width: 100%;
  }

  .highlight {
    background-color: ${(props) => props.theme.buttonBgHover};
    padding: 10px;
    margin: 10px 0;
  }

  code {
    background-color: ${(props) => props.theme.buttonBgHover};
    font-size: 12px;
    color: red;
  }

  span {
    h1 {
      font-size: 30px;
    }
  }

  .readme-overview {
    ${(props) => props.theme.buttonBg};
    text-align: center;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: ${(props) => props.theme.fontColor1} 0px 15px 20px -20px;

    img {
      width: 20px;
      margin-right: 10px;
      box-shadow: none;
    }

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    }

    h3 {
      margin: 0;
    }
  }
`;
