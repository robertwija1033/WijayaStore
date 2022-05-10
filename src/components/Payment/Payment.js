import "./Payment.css";

const Payment = () => {
  return (
    <div className="container-payment">
      <div className="card-payment">
        <div className="card-image">
          <img
            src={`${process.env.PUBLIC_URL}/download__17_-removebg-preview.png`}
            alt="Delizia French Door Refrigerator"
          />
          <h5>Total Price: Rp24.851.875</h5>
        </div>
        <div className="payment">
          <div className="payment-details">
            <p>enter payment details</p>
          </div>
          <div className="payment-pay">
            <div className="card-number">
              <p>Card Number</p>
            </div>
            <div className="number-input">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
          <div className="payment-pay">
            <div className="cardholder">
              <p>Cardholder Name</p>
            </div>
            <div className="holder-input">
              <input type="text" />
            </div>
          </div>
          <div className="payment-pay">
            <div className="security">
              <p>Security Code</p>
            </div>
            <div className="secure-input">
              <input type="text" />
            </div>
          </div>
          <div className="payment-pay button">
            <button onclick="window.location.href='../Shopping/shopping.html'">
              Confirm And Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
