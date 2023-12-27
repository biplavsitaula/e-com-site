import { useSelector } from "react-redux";
import Payment from "../routes/Payment";
import { Link } from "react-router-dom";

const BagSummary = ({ item }) => {
  const bagItem = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);
    return itemIndex >= 0;
  });
  let totalItem = bagItem.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  const CONVENIENCE_FEES = 99;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  const handlePayment = () => {
    <Link to="/payment" />;
  };

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">{CONVENIENCE_FEES}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <Link to="/payment">
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </Link>
    </>
  );
};

export default BagSummary;
