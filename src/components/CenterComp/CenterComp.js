import ovqattiRasmi1 from '../../assets/images/ovqat.png';
import ovqattiRasmi2 from '../../assets/images/ovqat1.png';
import ovqattiRasmi3 from '../../assets/images/ovqat2.png';
import ovqattiRasmi4 from '../../assets/images/ovqat3.png';
import ovqattiRasmi5 from '../../assets/images/ovqat4.png';
import ovqattiRasmi6 from '../../assets/images/ovqat5.png';

import './CenterComp.scss';

const CenterComp = ({icon}) => {
  return (
    <div className="center-comp">
      <div className="added">
        <div className="added-left">
          <img src={ovqattiRasmi1} alt=""/>
          <div className="food-info">
            <h4>Spicy seasoned sea...</h4>
            <span>$ 2.29</span>
          </div>
        </div>
        <div className="added-right">
          <input type="text" name="" id="" placeholder="2"/>
          <h3>$ 4,58</h3>
        </div>
      </div>
      <div className="removed">
        <input type="text" placeholder="Order Note..."/>
        <div className="icon">
          {icon}
        </div>
      </div>
    </div>
  )
}

export default CenterComp;