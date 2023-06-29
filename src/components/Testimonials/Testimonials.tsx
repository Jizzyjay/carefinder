import React from "react";
import TestimonialCard from "./TestimonialCard";
import tsProfile from "../../Assets/Ellipse 13.png";
import tsProfile2 from "../../Assets/Ellipse 13 (1).png";
import tsProfile3 from "../../Assets/Ellipse 13 (2).png";
import stars from "../../Assets/Group 57.png";
import "./Testimonial.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__header">
      </div>
      <div className="testimonials__head">
        <h1>What Our Users Say</h1>
      </div>
      <div className="testimonialCard">
        <TestimonialCard
          image={tsProfile3}
          description="Finding the right hospital has never been easier! With this website, I was able to locate a nearby hospital quickly and efficiently. The search feature is user-friendly, and it provided me with all the essential information I needed. Highly recommended"
          stars={stars}
          paragraphs="Sarah M."
        />
        <TestimonialCard
          image={tsProfile2}
          description="Finding the right hospital has never been easier! With this website, I was able to locate a nearby hospital quickly and efficiently. The search feature is user-friendly, and it provided me with all the essential information I needed. Highly recommended"
          stars={stars}
          paragraphs="John D."
        />
        <TestimonialCard
          image={tsProfile}
          description="I recently moved to a new city and had no idea where to go for medical assistance, my friend shared me some hospital details using the carefinder website. It made my life easier, i was able to fine reputable hospitals near me effortlessly. The website’s is user friendly interface and comprehnsive search gave me peace of mind. I highly recommend."
          stars={stars}
          paragraphs="Emiliy T."
        />
      </div>
    </div>
  );
};

export default Testimonials;
