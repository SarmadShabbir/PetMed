import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
import { useState, useEffect } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const DoctorCard = (props) => {
  const [ratings, setRatings] = useState(0);
  useEffect(() => {
    setRatings(props.rats);
  }, []);
  return (
    <Container>
      <img
        src={props.DoctorPic}
        alt="Doctor Picture"
        className="profile__pic"
      />
      <div className="card">
        <p className="card__content" style={{ fontSize: "1.5rem" }}>
          {props.DoctorName}
        </p>
        <p className="card__content">{props.content}</p>
        <p className="card__content">{props.specialist}</p>
        <p className="card__content">{props.experience}</p>
        <div className="information">
          <div className="wrapper">
            <p className="wrapper__content">{props.paitents}</p>
            <p className="head" style={{ color: "#008081" }}>
              Total Patients
            </p>
          </div>
          <div className="wrapper">
            <p className="wrapper__content">{props.rats}</p>
            <p className="stars__container">
              {ratings >= 1 ? (
                <StarIcon className="stars" />
              ) : (
                <StarBorderIcon />
              )}
              {ratings >= 2 ? (
                <StarIcon className="stars" />
              ) : (
                <StarBorderIcon />
              )}
              {ratings >= 3 ? (
                <StarIcon className="stars" />
              ) : (
                <StarBorderIcon />
              )}
              {ratings >= 4 ? (
                <StarIcon className="stars" />
              ) : (
                <StarBorderIcon />
              )}
              {ratings === 5 ? (
                <StarIcon className="stars" />
              ) : (
                <StarBorderIcon />
              )}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DoctorCard;

const Container = styled.section`
  position: relative;
  display: inline-block;
  width: 25%;
  text-align: center;

  .card {
    background-color: white;
    padding-top: 3rem;
  }
  .profile__pic {
    position: absolute;
    bottom: 205px;
    right: 163px;
    width: 120px;
  }
  .card__content {
    color: #008081;
  }
  .information {
    display: flex;
    align-items: center;
    padding: 2.5rem 0 1rem 0;
  }
  .wrapper {
    align-self: normal;
    flex: 2 1 auto;
  }
  .wrapper__content {
    font-size: 1.7rem;
    font-weight: 400;
    color: #008081;
  }
  .stars {
    color: #fdcc0d;
  }
`;
