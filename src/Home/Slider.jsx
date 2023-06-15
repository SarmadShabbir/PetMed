import cat from "../assets/cat.png";
import bird from "../assets/bird.png";
import reptile from "../assets/reptile.png";
import dog from "../assets/dog.png";
import fish from "../assets/fish.png";
import styled from "styled-components";

const Slider = () => {
  return (
    <Container>
      <h3 id="slider__name">Find Vets Accordingly</h3>
      <ul id="slider__container">
        <li className="content__container">
          <img src={cat} alt="cat" className="content" />
          <span>Cats</span>
        </li>
        <li className="content__container">
          <img src={dog} alt="dog" className="content" />
          <span>Dogs</span>
        </li>
        <li className="content__container">
          <img src={bird} alt="bird" className="content" />
          <span>Birds</span>
        </li>
        <li className="content__container">
          <img src={fish} alt="fish" className="content" />
          <span>Fishes</span>
        </li>
        <li className="content__container">
          <img src={reptile} alt="reptile" className="content" />
          <span>Reptiles</span>
        </li>
      </ul>
    </Container>
  );
};

export default Slider;

const Container = styled.section`
margin: 2rem 0;
  #slider__name {
    color: #008081;
    font-size: 3rem;
    font-weight: 400;
  }
  text-align: center;
  padding: 0.8rem;
  #slider__container {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0 3rem;
  }
  .content {
    height: 170px;
    width: 170px;
  }
  .content__container {
    flex: 2 1 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .content__container > span {
    color: #008081;
    font-size: 1.6rem;
  }
`;
