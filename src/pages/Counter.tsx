import React from 'react';
import counterData from '../locales/pages-json/Counter.json';

const Counter: React.FC = () => (
  <main>
    <div className="container my-5">
      <div className="row align-items-center">
        {counterData.map((item, idx) => (
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0" key={idx}>
            <div className="counter-single-item-inner text-center p-4 bg-white rounded shadow-sm h-100">
              <div className="counter-content">
                {/* <div className="counter-icon mb-3">
                  <img
                    src={require(`../assets/images/resource/${item.icon}`)}
                    alt={item.title}
                    style={{ width: 48, height: 48 }}
                  />
                </div> */}
                <div className="counter-text">
                  <h1>
                    <span className="counter fs-2 fw-bold">{item.value}</span>
                  </h1>
                  <div className="counter-title mt-2">
                    <h4 className="mb-0">{item.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default Counter;