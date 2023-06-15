import styled from "styled-components";
import siteLogo from "../assets/logo.png";
import userPic from "../assets/userPic.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavContainer>
      <ul className="container">
        <li className="left__container">
          <img src={siteLogo} alt="site-logo" className="logo" />
        </li>
        <li className="mid__container">
          <ul className="mid">
            <li className="mid__content">
              <Link to="#">
                Home <KeyboardArrowDownIcon />
              </Link>
            </li>

            <li className="mid__content">
              <Link to="#">
                Laboatories <KeyboardArrowDownIcon />
              </Link>
            </li>

            <li className="mid__content">
              <Link to="#">
                Blogs <KeyboardArrowDownIcon />
              </Link>
            </li>

            <li className="mid__content">
              <Link to="#">
                Complaint <KeyboardArrowDownIcon />
              </Link>
            </li>
          </ul>
        </li>
        <li className="right__container">
          <div className="wrapper">
            <span className="text">Login</span>{" "}
            <KeyboardArrowDownIcon id="down" />
            <img src={userPic} alt="user" className="user__icon" />
          </div>
        </li>
      </ul>
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  .container {
    display: flex;
    list-style: none;
    /* align-items: center; */
  }
  .logo {
    width: 200px;
    margin-left: 3rem;
  }
  .mid__container {
    align-self: center;
    flex: 2 1 auto;
  }
  .mid {
    list-style: none;
    display: flex;
    align-items: center;
    flex: 2 1 auto;
    justify-content: center;
  }
  .mid__content a {
    margin: 0 1.4rem;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    color: #008081;
    font-weight: 200;
    text-decoration: none;
  }
  .user__icon {
    width: 33.72;
    height: 33.72px;
  }
  .right__container {
    background-color: #008081;
    display: flex;
    align-items: center;
    margin-left: auto;
    padding: 0 3rem;
  }
  .wrapper {
    display: flex;
    align-items: center;
  }
  .text {
    font-size: 2rem;
    color: white;
    margin-right: 0.3rem;
  }
  #down {
    font-size: 2.4rem;
    color: white;
  }
`;
