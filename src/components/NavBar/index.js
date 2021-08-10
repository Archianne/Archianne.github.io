import styled from "styled-components";
import Icons from "../../theme/icons";
import Link from "../_Styled/link";

const NavBar = (props) => {
  const tabs = [
    {
      title: "Home",
      path: "",
    },
    {
      title: "Portfolio",
      path: "portfolio",
    },
    {
      title: "Links",
      path: "links",
    },
    {
      title: "Blog",
      path: "blog",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ];

  return (
    <StyledNavBar>
      <Icons.Menu className="menu-icon" />
      <Icons.Archer className="logo-icon" onClick={props.changeTheme} />
      <FlexDiv>
        {tabs.map((tab, index) => {
          return (
            <Link href={"/#/" + tab.path} key={index}>
              <p>{tab.title}</p>
            </Link>
          );
        })}
      </FlexDiv>
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.nav`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  line-height: 21px;
  height: 70px;
  background: ${(props) => props.theme.navBg};
  color: ${(props) => props.theme.navFontColor};
  @media (max-width: 768px) {
    padding: 16px 16px;
  }

  a {
    color: ${(props) => props.theme.navFontColor};
    margin-right: 16px;
  }

  .logo-icon {
    width: 32px;
    height: auto;
    cursor: pointer;
  }

  .menu-icon {
    width: 24px;
    height: 24px;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    .arrow-icon,
    .plus-icon,
    img,
    a,
    input {
      display: none;
    }
  }

  .arrow-icon {
    width: 10px;
    height: 10px;
    margin-right: 16px;
    margin-left: 3px;
  }

  .bell-icon {
    margin-right: 16px;
    width: 16px;
    height: 16px;
    @media (max-width: 768px) {
      margin: 0;
    }
  }

  .plus-icon {
    width: 20px;
    height: 20px;
  }

  img {
    width: 20px;
  }
`;
