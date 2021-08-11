import { useEffect, useRef, useState } from "react";
import Icons from "../../theme/icons";
import styled from "styled-components";
import Link from "./link";

const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
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

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <StyledDropdown>
      <button onClick={onClick} className="menu-trigger">
        <Icons.Menu />
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          {tabs.map((tab, index) => {
            return (
              <li onClick={() => setIsActive(false)}>
                <Link href={"/#/" + tab.path} key={index}>
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </StyledDropdown>
  );
};

export default DropdownMenu;

const StyledDropdown = styled.div`
  @media (min-width: 768px) {
    display: none;
  }

  .menu {
    background: ${(props) => props.theme.bg};
    border-radius: 8px;
    position: absolute;
    top: 60px;
    width: 50vw;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateX(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }

  .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu li {
    border-bottom: 1px solid ${(props) => props.theme.line};
    :last-child {
      border: none;
    }
    a {
      text-decoration: none;
      color: ${(props) => props.theme.fontColor1};
      padding: 15px 20px;
      display: block;
    }
  }

  .menu-trigger {
    background: transparent;
    color: #f5f5f5;
    cursor: pointer;
    border: none;
  }
`;
