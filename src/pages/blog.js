import { Suspense } from "react";
import styled from "styled-components";
import useFetch from "../components/_Hooks/useFetch";
// import { Link } from "react-router-dom";
// import Image from "../components/_Styled/img";
// import Line from "../components/_Styled/line";

const Blog = () => {
  const URL = `https://api.github.com/users/Archianne/gists`;
  const [value] = useFetch(URL);
  console.log(value);
  const mapValues =
    Array.isArray(value) &&
    value.slice(0, 10).map((item) => {
      return (
        <List key={item.id}>
          <h2>{item.description}</h2>
          <p>{}</p>
        </List>
        //   <Image
        //     src={
        //       item.cover_image ||
        //       "https://ddvql06zg3s2o.cloudfront.net/Assets/res/p/2781/imgs/M_loading.gif"
        //     }
        //     alt={item.id}
        //   />
        //   <h2>{item.title}</h2>
        //   <p>{item.description}</p>

        //   <Line />
        //   <Link
        //     to={{
        //       pathname: `/post/${item.slug}/${item.id}`
        //     }}
        //     replace
        //   >
        //     See more
        //   </Link>
      );
    });

  return (
    <StyledBlog>
      <Suspense fallback={<div>Loading</div>}>{mapValues}</Suspense>
    </StyledBlog>
  );
};

export default Blog;

const StyledBlog = styled.ul`
  display: flex;
  flex-flow: row wrap;
  width: 70%;
  margin: 0 auto;

  a {
    color: ${(props) => props.theme.active};
    text-decoration: none;
    font-weight: bold;
    margin-top: 15px;
  }
`;

const List = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  min-width: 150px;
  width: 45%;
  margin: 5px 10px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.boxBorder};

  img {
    border-radius: 0;
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  p,
  h2 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    width: 90vw;
    margin: 5px 0;
  }
`;
