import './FooterComponent.scss';

const FooterComponent =  (props) => {
  const {
    foodImg,
    foodInfo,
    foodPrice,
    foodBowls
  } = props;

  return (
      <div className="footer-component">
        <img src={foodImg} alt=""/>
        <h3>{foodInfo}</h3>
        <span>{foodPrice}</span>
        <p>{foodBowls}</p>
      </div>
  )
}

export default FooterComponent;