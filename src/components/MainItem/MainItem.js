import './MainItem.scss';

const MainItem = (props) => {
  const {
    title,
    date,
    searchImg,
    inputText,
    hotDishes,
    coldDishes,
    soup,
    grill,
    appetizer,
    dessert
  } = props;

  return (
    <div className="main-item">
      <div className="item">
        <div className="item-title">
          <h1>{title}</h1>
          <p>{date}</p>
        </div>
        <div className="item-search">
          <img src={searchImg} alt=""/>
          <input type="text" name="" id="" placeholder={inputText}/>
        </div>
      </div>
      <div className="buttons">
        <a href="#">{hotDishes}</a>
        <a href="#">{coldDishes}</a>
        <a href="#">{soup}</a>
        <a href="#">{grill}</a>
        <a href="#">{appetizer}</a>
        <a href="#">{dessert}</a>
      </div>
    </div>
  )
}

export default MainItem;