import React from "react";
import HeaderImg from "../assets/Fitness_Checkout_Landing_Page_Header.jpg";
import CompanyImage from "../assets/leadpages_logo.png";

function FitnessCheckoutFunnel() {
  return (
    <div className="page-content text-lg">
      <div className="lg:mx-[-100px] mx-[-40px] lg:mt-[-100px] mt-[-40px] mb-[30px]">
        <img src={HeaderImg} alt="Header" className="header-image" />
      </div>
      <div className="company-title flex flex-col-2 space-x-4 mb-8">
        <img src={CompanyImage} alt="Company" className="w-11 h-11" />
        <h4 className="pt-2">Leadpages.com</h4>
      </div>
      <div className="md:flex md:flex-col-2">
        <div className="md:w-[70%]">
          <h1 className="text-5xl mb-5">Fitness Checkout Funnel</h1>
          <h2>Project Overview</h2>
          <p>
            This page was created becuase I noticed that Leadpages had a lot of
            fitness professioanals using their platform, but minimal fitness
            themes in the marketplace. Specificly themes that helped them sell
            their services directly. This page was created to solve that
            problem.
          </p>
        </div>
        <div className="project-details flex-auto md:mt-0 mt-10">
          <div>
            <ul className="md:text-right mb-5">
              <li>
                <strong>Role:</strong>
              </li>
              <li>Designer</li>
              <li>Developer</li>
            </ul>
            <ul className="md:text-right mb-5">
              <li>
                <strong>Deliverables:</strong>
              </li>
              <li>Photoshop Design</li>
              <li>Theme Files</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FitnessCheckoutFunnel;
