import MainSection from '../../containers/MainSection';
import MainHeader from '../../containers/MainHeader';
import MainFooter from '../../containers/MainFooter';
import Selection from '../../containers/Selection';

import './HomePage.scss';

const HomePage = () => {
  return(
    <div className="home-page">
      <div className="home-center">
        <MainHeader/>
        <Selection/>
        <MainFooter/>
      </div>
      <div className="home-right">
        <MainSection/>
      </div>
    </div>

  )
}

export default HomePage;