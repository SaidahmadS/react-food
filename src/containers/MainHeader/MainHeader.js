import MainItem from '../../components/MainItem/MainItem'

import SearchImg from '../../assets/images/icons/Mask.svg'

import './MainHeader.scss';

const headerInfo = [
  {
    title: 'Jaegar Resto',
    date: 'Tuesday, 2 Feb 2021',
    searchImg: SearchImg,
    inputText: 'Search for food, coffe, etc..',
    hotDishes: 'Hot Dishes',
    coldDishes: 'Cold Dishes',
    soup: 'Soup',
    grill: 'Grill',
    appetizer: 'Appetizer',
    dessert: 'Dessert'
  }
]

const MainHeader = () => {
  return (
    <div className="main-header">
      {
        headerInfo.map(item => (
          <MainItem
            title={item.title}
            date={item.date}
            searchImg={item.searchImg}
            inputText={item.inputText}
            hotDishes={item.hotDishes}
            coldDishes={item.coldDishes}
            soup={item.soup}
            grill={item.grill}
            appetizer={item.appetizer}
            dessert={item.dessert}
          />
        ))
      }
    </div>
  )
}
 
export default MainHeader;
