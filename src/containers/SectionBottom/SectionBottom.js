import './SectionBottom.scss';

const SectionBottom = () => {
  return (
    <div className="section-bottom">
      <div className="discount">
        <p>Discount</p>
        <h3>$ 0</h3>
      </div>
      <div className="discount">
        <p>Sub total</p>
        <h3>$ 21,03</h3>
      </div>
      <button type="submit">Continue to Payment</button>
    </div>
  )
}

export default SectionBottom;