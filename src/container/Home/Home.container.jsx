/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import { networkList } from "../../components/Shared/Header/Header";

const Home = () => {
  const [network, setNetwork] = useState(networkList[0]);
  const [inputValue, setInputValue] = useState({
    sum: 50,
    wallet_num: 30
  });

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header network={network} setNetwork={setNetwork} />
      <div className="home_wrapper">
        <div className="container">
          <div className="home_content">
            <div className="input_field">
              <form onSubmit={handleSubmit}>
                <label htmlFor="value">Enter value</label>
                <input
                  type="text"
                  name="sum"
                  placeholder="Enter value"
                  onChange={handleChange}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="display_content">
              <div className="content">
                <span className="sum">Total Sum</span>
                <span className="value">{inputValue.sum}</span>
              </div>
              <div className="content">
                <span className="sum">Total Number of Wallets</span>
                <span className="value">{inputValue.wallet_num}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
