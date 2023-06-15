import DoctorCard from "./DoctorCard";
import Female from "../assets/Female.png";
import Male from "../assets/Male.png";
import styled from "styled-components";

const DoctorCardSlider = () => {
  return (
    <Container>
      <h2 id="heading">Featured Vets</h2>
      <div className="cards__container">
        <DoctorCard
          DoctorPic={Male}
          DoctorName="Dr. Tabish Abdullah"
          content="BVM&AR"
          specialist="Dog Specialist"
          experience="4 Years of experience"
          paitents="790"
          rats="4"
        />
        <DoctorCard
          DoctorPic={Female}
          DoctorName="Dr. Maryam Bushra"
          content="BVMS"
          specialist="Bird Specialist"
          experience="7 Years of experience"
          paitents="504"
          rats="5"
        />
        <DoctorCard
          DoctorPic={Male}
          DoctorName="Dr. Syed Muhammad Umar"
          content="DVM"
          specialist="Cat Specialist"
          experience="5 Years of experience"
          paitents="463"
          rats="3"
        />
        <DoctorCard
          DoctorPic={Female}
          DoctorName="Dr. Iman Sehar"
          content="BVM&AR"
          specialist="Dog Specialist"
          experience="3 Years of experience"
          paitents="463"
          rats="2"
        />
      </div>
    </Container>
  );
};

export default DoctorCardSlider;

const Container = styled.section`
  background-color: #d2e9e3;
  padding: 1.4rem 4rem;

  .cards__container {
    margin-top: 2rem;
  }
  #heading {
    text-align: center;
    font-size: 3rem;
    font-weight: 400;
    color: #008081;
  }
  .card {
    margin: 0 3.4rem;
  }
`;
