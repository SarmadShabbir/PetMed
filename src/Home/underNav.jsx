import styled from "styled-components";
import underNavBack from "../assets/underNavBack.jpg";
import doctor from "../assets/doctor.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import SearchIcon from "@mui/icons-material/Search";

const underNav = () => {
  return (
    <UpperContainer>
      <UnderNavContainer>
        <img src={doctor} alt="doctor" className="left" id="doctor__pic" />
        <p id="mid__text">
          Find the best <span style={{ color: "white" }}>Vet</span> near you
        </p>
        <button className="right">Book Appointment</button>
      </UnderNavContainer>
      <div className="positiong">
        <div className="location">
          <div className="search__container">
            <LocationOnIcon id="location__icon" />
            <input type="text" placeholder="Lahore" />
          </div>
          <div className="location__container">
            <GpsFixedIcon style={{ color: "#008081" }} />
            <button className="search">Location</button>
          </div>
        </div>

        <div className="location adjustment">
          <input type="text" placeholder="Search by Vets, Breed, Problem" />
          <div className="location__container ">
            <SearchIcon style={{ color: "#008081" }} />
            <button className="search">Search</button>
          </div>
        </div>
      </div>
    </UpperContainer>
  );
};

export default underNav;

const UpperContainer = styled.section`
  box-sizing: border-box;
  .positiong {
    bottom: 3vh;
    left: 70vh;
    position: relative;
    display: flex;
    align-items: center;
    width: fit-content;
    display: none;
  }
  .location {
    display: flex;
    align-items: center;
    border-radius: 2px;
    margin-left: 20px;
    flex: 2 1 auto;
  }
  .adjustment > input {
    padding: 0.5rem;
    outline: none;
    border: none;
    width: 100%;
    font-size: 1rem;
  }
  .modification {
    padding: 1rem;
  }
  .search__container {
    display: inline-flex;
    align-items: center;
    padding: 0.4rem;
    background-color: white;
  }
  #location__icon {
    color: #008081;
    font-size: 1.3rem;
  }
  .location__container {
    background-color: #d2e9e3;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
  }
  .search {
    padding: 0.6rem;
    border: none;
    color: #008081;
    background-color: #d2e9e3;
  }
  .search__container > input {
    outline: none;
    border: none;
    font-size: 1rem;
  }
`;

const UnderNavContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-image: url(${underNavBack});
  padding-right: 3rem;

  #doctor__pic {
    height: 120px;
    width: 120px;
  }
  #mid__text {
    margin-left: 6rem;
    color: #d2e9e3;
    font-size: 3rem;
    font-weight: 200;
  }
  .right {
    color: white;
    background-color: #3b8d8d;
    padding: 0.8rem;
    font-size: 1.4rem;
    border: none;
    margin-left: auto;
  }
`;
