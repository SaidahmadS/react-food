import OrderReport from '../../containers/OrderReport';
import OrderInfo from '../../containers/OrderInfo';

import './OrderPage.scss';

const OrderPage = () => {
  return(
    <div className="order-page">
      <OrderReport/>
      <OrderInfo/>
    </div>
  )
}

export default OrderPage;