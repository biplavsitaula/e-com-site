const Payment = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 payment">
      <div className="col ">
        <div className="card h-100 col-card">
          <div className="card-body">
            <h5 className="card-title">Bank</h5>
            <p className="card-text">Bank Payment Method</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Takes upto 5 mins.</small>
          </div>
        </div>
      </div>
      <div className="col ">
        <div className="card h-100 col-card">
          <div className="card-body">
            <h5 className="card-title">Connect IPS</h5>
            <p className="card-text">Use connect IPS for Payment</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Instant</small>
          </div>
        </div>
      </div>
      <div className="col ">
        <div className="card h-100 col-card">
          <div className="card-body">
            <h5 className="card-title">Esewa</h5>
            <p className="card-text">Use mobile wallet system</p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Takes upto 10 mins.</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
