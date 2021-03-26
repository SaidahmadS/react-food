import FooterComponent from '../../components/FooterComponent/FooterComponent';

import ovqattiRasmi1 from '../../assets/images/ovqat.png';
import ovqattiRasmi2 from '../../assets/images/ovqat1.png';
import ovqattiRasmi3 from '../../assets/images/ovqat2.png';
import ovqattiRasmi4 from '../../assets/images/ovqat3.png';
import ovqattiRasmi5 from '../../assets/images/ovqat4.png';
import ovqattiRasmi6 from '../../assets/images/ovqat5.png';

import './MainFooter.scss';


const mainFooterInfo = [
  {
    foodImg: ovqattiRasmi1,
    foodInfo: 'Spicy seasoned seafood noodles',
    foodPrice: '$ 2.29',
    foodBowls: '20 Bowls available',
  },
  {
    foodImg: ovqattiRasmi2,
    foodInfo: 'Salted Pasta with mushroom sauce',
    foodPrice: '$ 2.69',
    foodBowls: '11 Bowls available',
  },
  {
    foodImg: ovqattiRasmi3,
    foodInfo: 'Beef dumpling in hot and sour soup',
    foodPrice: '$ 2.99',
    foodBowls: '16 Bowls available',
  },
  {
    foodImg: ovqattiRasmi4,
    foodInfo: 'Healthy noodle with spinach leaf',
    foodPrice: '$ 3.29',
    foodBowls: '22 Bowls available',
  },
  {
    foodImg: ovqattiRasmi5,
    foodInfo: 'Hot spicy fried rice with omelet',
    foodPrice: '$ 3.49',
    foodBowls: '13 Bowls available',
  },
  {
    foodImg: ovqattiRasmi6,
    foodInfo: 'Spicy instant noodle with special omelette',
    foodPrice: '$ 3.59',
    foodBowls: '17 Bowls available',
  },
  {
    foodImg: ovqattiRasmi3,
    foodInfo: 'Beef dumpling in hot and sour soup',
    foodPrice: '$ 2.99',
    foodBowls: '16 Bowls available',
  },
  {
    foodImg: ovqattiRasmi4,
    foodInfo: 'Healthy noodle with spinach leaf',
    foodPrice: '$ 3.29',
    foodBowls: '22 Bowls available',
  },
  {
    foodImg: ovqattiRasmi5,
    foodInfo: 'Hot spicy fried rice with omelet',
    foodPrice: '$ 3.49',
    foodBowls: '13 Bowls available',
  },
]

const MainFooter = () => {
   return (
     <div className="main-footer">
        {
          mainFooterInfo.map(item => (
            <FooterComponent
              foodImg={item.foodImg}
              foodInfo={item.foodInfo}
              foodPrice={item.foodPrice}
              foodBowls={item.foodBowls}
            />
          ))
        }
     </div>
   )
}

export default MainFooter;