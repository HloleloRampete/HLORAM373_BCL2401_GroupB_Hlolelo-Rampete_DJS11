import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselComponent.css";

const CarouselComponent = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
   <div className="carousel-container">
     <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id} className="carousel-item">
          <img src={item.displayImage} alt={item.title} style={{ width: "100%", borderRadius: "10px" }} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </Slider>
   </div>
  );
};

CarouselComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      displayImage: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CarouselComponent;
