import React from "react";
import "./career.css";

export default function Career() {

      const internships = [
    {
      title: "Standard Internship Positions",
      url: "/career/standard-internship-positions",
    },
    {
      title: "MBA & Master's Internship Positions",
      url: "/career/mba-masters-internship-positions",
    },
    {
      title: "AI-Enhanced Internship Opportunities",
      url: "/career/ai-enhanced-internship-opportunities",
    },
  ];
  return (
    <>

     <section className="crr-hero-section text-white d-flex align-items-center">
  <div className="container py-5">
    <div className="row">
      {/* Left Text Column */}
      <div className="col-md-8 col-lg-6">
        <h1 className="display-4 fw-bold mb-4 text-xxl-center text-white ">
        Careers
        </h1>
      </div>
    </div>
  </div>
</section>

      <section className="tracking-section">
        <div className="tracking-container text-start">

          <p>
At IPEOPLE TRACKING, we believe technology should empower—not complicate—your workflow. With a strong and growing B2B presence across North America, we are recognized for our commitment to technology innovation, product reliability, and customer-centric support where we develop and deliver cutting-edge solutions designed to help businesses and institutions track people seamlessly, accurately, and responsibly. Whether you’re starting your career or seeking an internship, we offer opportunities to learn, grow, and make a real impact welcoming individuals to join our growing team.



          </p>
        </div>
      </section>

 {/* Internship List Section */}
      <section className="internship-section text-center py-5">
        <div className="container">
          <h2 className="internship-title mb-4">
            List of Internship Types Available in <span className="highlight">IPEOPLE TRACKING</span>
          </h2>
          <ul className="internship-list list-unstyled mx-auto">
            {internships.map((item, index) => (
              <li key={index} className="internship-item d-flex align-items-center mb-3 border-bottom pb-2">
                <span className="checkmark me-2">✔</span>
                <a href={item.url} className="internship-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
  

</>
  );}
