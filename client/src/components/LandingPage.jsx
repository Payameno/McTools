import React from "react";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <section className="main-page">
      <img className="main-img" src='https://imgur.com/a/PJfp33u' alt="Mctools - NO JOB TOO BIG. NO JOB TOO SMALL" />

      <div className="card">
        <h1 className="travel">
        We work to ensure that we get you the best tools and solutions for your job every day.
        </h1>
        <Link to='/new-arrivals' className="shop-depawture">
          SHOP McTools
        </Link>
      </div>
    </section>

  )
}

export default LandingPage;