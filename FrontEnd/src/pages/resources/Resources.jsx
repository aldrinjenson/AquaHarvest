import React from "react";
import "./Resources.css";
import Navbar from "../../components/Navbar/Navbar";
import fishes from "../../data/fishes.json";

const Resources = () => {
  return (
    <div className="onb-container">
      <Navbar />
      <div className="firstPara"></div>
      <div className="links">
        <div className="flex flex-row" style={{ flexWrap: "wrap" }}>
          <h1>Popular fishes near me</h1>
          {fishes.map((fish) => (
            <div key={fish.name} className="LoadTank">
              <img src={fish.imgUrl} alt="" width={100} />
              <h4>{fish.name}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="links">
        <div className="LoadTank">
          <h2>Resources</h2>
        </div>
      </div>
      <ul>
        <li>
          <a
            href="https://www.agrifarming.in/fish-farming"
            style={{ textDecoration: "underline" }}
          >
            Fish Farming guide for begineers. Why you should consider fish
            farming.
          </a>
        </li>
        <li>
          <a
            href="https://www.agrifarming.in/fish-farming"
            style={{ textDecoration: "underline" }}
          >
            Some other link
          </a>
        </li>
        <li>
          <a
            href="https://dahd.nic.in/related-links/centrally-sponsored-scheme-development-inland-fisheries-and-aquaculture"
            style={{ textDecoration: "underline" }}
          >
            Subsidy Resoures{" "}
          </a>
        </li>
        <li>
          <a
            href="https://www.agrifarming.in/fish-farming"
            style={{ textDecoration: "underline" }}
          >
            Third resource
          </a>
        </li>
      </ul>
      {/* <div className="LoadTank">
          <img src={user} alt="" />
          <p>New to fish farming?</p>
          <a href="https://en.wikipedia.org/wiki/Fish_farming">
            Check out details here
          </a>
        </div> */}
    </div>
  );
};

export default Resources;
