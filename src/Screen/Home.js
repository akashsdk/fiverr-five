import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SliderScreen from "../Others/SliderScreen";
import SliderScreen2 from "../Others/SliderScreen2";
import SliderScreen3 from "../Others/SliderScreen3";
import SliderButton from "../Components/SliderButton";
import MoviesScreen from "../Others/MoviesScreen";
import ShowsScreen from "../Others/ShowsScreen";

import MovieSlider from "../Cart/MovieSlider";
import TextCart from "../Cart/TextCart";
import Try from "../Others/Try";

import Img1 from "../Data/ Wonder Woman.webp";
import Img2 from "../Data/Ami bangladesh.jpeg";
import Img3 from "../Data/Bahubali 2.jpeg";
import Img4 from "../Data/Bhilaa-2024.jpeg";
import Img5 from "../Data/Black Panther.jpg";
import Img6 from "../Data/Fast & Furious 6.jpeg";
import Img7 from "../Data/Glass.jpeg";
import Img8 from "../Data/Kaiser.jpg";
import Img9 from "../Data/RRR-2022.jpg";
import Img10 from "../Data/Tallenge - The Conjuring 2.jpg";
import Img11 from "../Data/advocate achinta aich.jpg";
import Img12 from "../Data/animal-2024.jpeg";
import Img13 from "../Data/priyotoma.jpg";

export default function Home() {
  // Recently Added
  const containerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("right");

  const scrollLeft = () => {
    const container = containerRef.current;
    container.scrollBy({
      top: 0,
      left: -250,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const container = containerRef.current;
    container.scrollBy({
      top: 0,
      left: 250,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollDirection === "right") {
        scrollRight();
      } else {
        scrollLeft();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [scrollDirection]);

  useEffect(() => {
    const container = containerRef.current;

    const handleScrollEnd = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isEndReached = scrollLeft + clientWidth >= scrollWidth;

      if (isEndReached) {
        setScrollDirection("left");
      }
    };

    const handleScrollStart = () => {
      const { scrollLeft } = container;
      if (scrollLeft === 0) {
        setScrollDirection("right");
      }
    };

    container.addEventListener("scroll", handleScrollEnd);
    container.addEventListener("scroll", handleScrollStart);

    return () => {
      container.removeEventListener("scroll", handleScrollEnd);
      container.removeEventListener("scroll", handleScrollStart);
    };
  }, []);

  // Upcoming & New
  const containerRef2 = useRef(null);
  const [scrollDirection2, setScrollDirection2] = useState("right");

  const scrollLeft2 = () => {
    const container = containerRef2.current;
    if (container) {
      container.scrollBy({
        top: 0,
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const scrollRight2 = () => {
    const container = containerRef2.current;
    if (container) {
      container.scrollBy({
        top: 0,
        left: 250,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollDirection2 === "right") {
        scrollRight2();
      } else {
        scrollLeft2();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [scrollDirection2]);

  useEffect(() => {
    const container = containerRef2.current;

    const handleScrollEnd = () => {
      if (container) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        const isEndReached = scrollLeft + clientWidth >= scrollWidth;

        if (isEndReached) {
          setScrollDirection2("left");
        }
      }
    };

    const handleScrollStart = () => {
      if (container) {
        const { scrollLeft } = container;
        if (scrollLeft === 0) {
          setScrollDirection2("right");
        }
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScrollEnd);
      container.addEventListener("scroll", handleScrollStart);

      return () => {
        container.removeEventListener("scroll", handleScrollEnd);
        container.removeEventListener("scroll", handleScrollStart);
      };
    }
  }, []);
  return (
    <div className="body">
      <Header />
      <div className="box">
        <SliderScreen />

        <SliderScreen3 />

        {/* Recently Added */}
        <button className="Home-Button1">Recently Added</button>
        <div className="HomeBox1-Div">
          <SliderButton
            iconPosition="left"
            height="310px"
            onClick={scrollLeft}
          />
          <div className="HomeBox1" ref={containerRef}>
            <MovieSlider Img={Img1} name="Wonder Woman" imd="8.5" />
            <MovieSlider Img={Img2} name="Ami bangladesh" imd="6.0" />
            <MovieSlider Img={Img3} name="Bahubali 2" imd="8.0" />
            <MovieSlider Img={Img4} name="Bhilaa-2024" imd="7.5" />
            <MovieSlider Img={Img5} name="Black Panther" imd="8.0" />
            <MovieSlider Img={Img6} name="Fast & Furious 6" imd="7.0" />
            <MovieSlider Img={Img7} name="Glass" imd="8.0" />
            <MovieSlider Img={Img8} name="Kaiser" imd="7.5" />
            <MovieSlider Img={Img9} name="RRR-2022" imd="7.5" />
            <MovieSlider Img={Img10} name="The Conjuring 2" imd="5.5" />
            <MovieSlider Img={Img11} name="Advocate Achinta Aich" imd="0.0" />
            <MovieSlider Img={Img12} name="Animal-2024" imd="8.0" />
            <MovieSlider Img={Img13} name="Priyotoma" imd="7.0" />
          </div>
          <SliderButton
            iconPosition="right"
            height="310px"
            onClick={scrollRight}
          />
        </div>

        <SliderScreen2 />

        {/* Upcoming & New */}
        <button className="Home-Button1">Upcoming & New</button>
        <div className="HomeBox1-Div">
          <SliderButton
            iconPosition="left"
            height="310px"
            onClick={scrollLeft2}
          />
          <div className="HomeBox1" ref={containerRef2}>
            <MovieSlider Img={Img1} name="Wonder Woman" imd="8.5" />
            <MovieSlider Img={Img2} name="Ami bangladesh" imd="6.0" />
            <MovieSlider Img={Img3} name="Bahubali 2" imd="8.0" />
            <MovieSlider Img={Img4} name="Bhilaa-2024" imd="7.5" />
            <MovieSlider Img={Img5} name="Black Panther" imd="8.0" />
            <MovieSlider Img={Img6} name="Fast & Furious 6" imd="7.0" />
            <MovieSlider Img={Img7} name="Glass" imd="8.0" />
            <MovieSlider Img={Img8} name="Kaiser" imd="7.5" />
            <MovieSlider Img={Img9} name="RRR-2022" imd="7.5" />
            <MovieSlider Img={Img10} name="The Conjuring 2" imd="5.5" />
            <MovieSlider Img={Img11} name="Advocate Achinta Aich" imd="0.0" />
            <MovieSlider Img={Img12} name="Animal-2024" imd="8.0" />
            <MovieSlider Img={Img13} name="Priyotoma" imd="7.0" />
          </div>
          <SliderButton
            iconPosition="right"
            height="310px"
            onClick={scrollRight2}
          />
        </div>

        {/* Exclusives Movies */}
        <button className="Home-Button1">Exclusives Movies</button>
        <div className="HomeBox1-Div">
          <MoviesScreen />
        </div>

        {/* Exclusives Shows */}
        <button className="Home-Button1">Exclusives TV Shows</button>
        <div className="HomeBox1-Div">
          <ShowsScreen />
        </div>

        <Try />

        {/* AboutUs */}
        <TextCart
          headerText="About Us"
          bodyText="
          Welcome to CinemarooBD, your ultimate destination for unlimited movie
          and show streaming, all completely free of charge. At CinemarooBD, we
          believe that entertainment should be accessible to everyone,
          regardless of their financial means. Our platform is dedicated to
          providing a vast collection of movies and shows from various genres,
          ensuring there's something for every viewer's taste.
          <br />
          <br />
          Founded with a passion for cinema and a commitment to democratizing
          access to premium content, CinemarooBD aims to revolutionize the
          streaming landscape. With an intuitive interface and seamless user
          experience, navigating through our extensive library is effortless.
          Whether you're a fan of Hollywood blockbusters, indie gems, or
          binge-worthy TV series, CinemarooBD has you covered.
          <br />
          <br />
          Our team at CinemarooBD is dedicated to continuously expanding our
          library, bringing you the latest releases and timeless classics alike.
          We prioritize user satisfaction and strive to enhance our platform
          based on valuable feedback from our community. Transparency and
          integrity are at the core of our operations, ensuring a trustworthy
          and enjoyable streaming experience for all our users.
          <br />
          <br />
          Join us on this cinematic journey as we redefine the way you
          experience entertainment. CinemarooBD – where movies and shows meet
          freedom and affordability. For inquiries, suggestions, or
          partnerships, feel free to reach out to us at...
          <br />
          <a href='mailto:cinemaroobd@gmail.com'>cinemaroobd@gmail.com</a>"
        />

        <br />
        <br />
        <br />
        {/* Terms of Service */}
        <TextCart
          headerText="Terms of Service"
          bodyText="
        Welcome to CinemarooBD! These Terms of Service 'Terms' govern your
        access to and use of the CinemarooBD website, including all content,
        features, and services offered by CinemarooBD.
        <br /> <br />
        1. Acceptance of Terms
        <br />
        By accessing or using the CinemarooBD website, you agree to be bound
        by these Terms. If you do not agree to these Terms, please refrain
        from accessing or using our website.
        <br />
        <br />
        2. Use of Content
        <br />
        All content provided on the CinemarooBD website is for informational
        and entertainment purposes only. You may access and use the content
        solely for personal, non-commercial purposes. Any unauthorized use of
        the content may violate copyright, trademark, and other applicable
        laws.
        <br />
        <br />
        3. User Conduct
        <br />
        You agree not to engage in any conduct that may disrupt or interfere
        with the operation of the CinemarooBD website. This includes, but is
        not limited to, transmitting spam, viruses, or other harmful code, or
        attempting to gain unauthorized access to our systems.
        <br />
        <br />
        4. Intellectual Property
        <br />
        All intellectual property rights associated with the CinemarooBD
        website, including but not limited to trademarks, logos, and content,
        are owned by CinemarooBD or its licensors. You agree not to use,
        reproduce, or distribute any of these materials without prior written
        permission.
        <br />
        <br />
        5. Disclaimer of Warranties
        <br />
        The CinemarooBD website is provided on an 'as is' and 'as available'
        basis, without any warranties of any kind, express or implied.
        CinemarooBD does not warrant that the website will be uninterrupted or
        error-free, or that any defects will be corrected.
        <br />
        <br />
        6. Limitation of Liability
        <br />
        In no event shall CinemarooBD be liable for any indirect, incidental,
        special, consequential, or punitive damages arising out of or in
        connection with your use of the website, even if advised of the
        possibility of such damages.
        <br />
        <br />
        7. Governing Law
        <br />
        These Terms shall be governed by and construed in accordance with the
        laws of [Your Country], without regard to its conflict of law
        provisions.
        <br />
        <br />
        8. Changes to Terms
        <br />
        CinemarooBD reserves the right to modify or update these Terms at any
        time. By continuing to access or use the website after any such
        changes, you agree to be bound by the revised Terms.
        <br />
        <br />
        By accessing or using the CinemarooBD website, you acknowledge that
        you have read, understood, and agree to be bound by these Terms."
        />

        <Footer />
      </div>
    </div>
  );
}
