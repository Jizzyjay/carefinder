import React from "react";
import "./Home.css";
import img2 from "../../Assets/Rectangle 8.png";
import Card from "../Card/Card";
import image1 from "../../Assets/Group 35.png";
import image2 from "../../Assets/Group 33.png";
import image3 from "../../Assets/Group 34.png";
import image4 from "../../Assets/Group 35.png";

const Home = () => {
  return (
    <>
      <main className="home" id="home">
        <div className="home__section">
          <div className="home__right-side">
            <div className="home__img-2">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="home__left-side">
            <h1>
              Welcome to <span>CareFinder</span>
            </h1>
            <div>
              <p>
                Carefinder is a platform where users can search for hospitals in
                their areas, export hospital details for your records and
                enhance your healthcare experience by connecting with others and
                sharing valuable resources.
              </p>
            </div>
            <div className="home__button">
              <button>OUR SERVICES</button>
            </div>
          </div>
        </div>
      </main>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: "2rem",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#fff",
        }}
      >
        <Card
          title="Search Doctors"
          description="Effortlessly Find the Best Hospitals Near You"
          image={image1}
          alt="hey"
        />
        <Card
          title="Search Hospitals"
          description="Effortlessly Find the Best Doctors Near You"
          image={image2}
          alt="hey"
        />
        <Card
          title="Export Hospitals"
          description="Save list of hospitals"
          image={image3}
          alt="hey"
        />
        <Card
          title="Share Hospitals"
          description="Share the list of hospitals with others"
          image={image4}
          alt="hey"
        />
      </div>
    </>
  );
};

export default Home;
