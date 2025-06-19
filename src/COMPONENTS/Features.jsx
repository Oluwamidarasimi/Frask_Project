import React from "react";
import "../STYLES/Features.css";

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2>What we offer</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>About Us</h3>
            <p>
              At frask foods, Our team is dedicated to ensuring that high
              quality machine equipments are used to process and package our
              chicken and chicken products. Frasks foods is registered under the
              Corporate Affairs Commission (CAC) of Nigeria and is well known
              for its high quality products and services. We also partner with
              Fresh food hub located at Idi-oro, Mushin, Lagos state. and we are
              live there on wednesdays and saturdays to meet our customers
              physically and attend to their needs. we are also available on
              Frask foods website and we deliver to our customers within 24
              hours of placing their orders.
            </p>
          </div>
          <div className="feature-card">
            <h3>Our products</h3>
            <p>
              We offer a wide range of chicken produce including our Fresh eggs
              which is collected daily from our happy and healthy hens and are
              available in various sizes and packaging options, whole chicken,
              chicken breasts, chicken thighs, chicken wings, chicken
              drumsticks, chicken offals(gizards,liver, etc), chicken necks, and
              chicjen head as you may desire.
            </p>
          </div>
          <div className="feature-card">
            <h3>Our Farm</h3>
            <p>
              Our farm located at Ogun state, is a place where animals are
              raised with care and respect. We believe in providing our animals
              with an healthy and comfortable environment, which is reflected in
              the quality of our products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
