import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import TextCart from "../Cart/TextCart";

export default function AboutUs() {
  return (
    <div className="body">
      <Header />
      <div className="box">
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
         cinemaroobd@gmail.com."
        />

        <Footer />
      </div>
    </div>
  );
}
