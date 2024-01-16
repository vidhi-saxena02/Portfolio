import React from "react";
import { Link } from "react-router-dom";

const CTA = ({ text1, text2 }) => {
  return (
    <section className="cta">
      <p className="cta-text">
        {text1} <br className="sm:block hidden" />
        {text2} 🚀
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
