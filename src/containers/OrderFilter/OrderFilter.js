import OrderList from '../../components/OrderList/OrderList';

import './OrderFilter.scss';

const OrderFilter = () => {
  return (
    <div className="order-filter">
      <div className="filter-info">
        <div className="info-top">
          <h2>Order Report</h2>
          <div className="filtered">
            <img src="" alt=""/>
            <p>Filter Order</p>
          </div>
        </div>
        <div className="info-bottom">
          <h3 className="customer">Customer</h3>
          <h3 className="menu">Menu</h3>
          <h3 className="total-payment">Total Payment</h3>
          <h3 className="status">Status</h3>
        </div>
      </div>
      <div className="ordered">
        <OrderList/>
        <OrderList/>
        <OrderList/>
        <OrderList/>
        <OrderList/>
        <OrderList/>
        <OrderList/>
        <OrderList/>
        <OrderList/>
        <OrderList/>
        <OrderList/>
      </div>
    </div>
  )
}

export default OrderFilter;