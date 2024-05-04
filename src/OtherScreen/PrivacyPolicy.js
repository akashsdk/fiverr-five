import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import TextCart from "../Cart/TextCart";

export default function PrivacyPolicy() {
  return (
    <div className="body">
      <Header />
      <div className="box">
        <TextCart
          headerText="Privacy Policy"
          bodyText="
          At CinemarooBD, we take your privacy seriously. This Privacy Policy
          outlines how we collect, use, and protect your personal information
          when you access or use our website.
          <br /> <br />
          1. Information Collection
          <br />
          We may collect personal information, such as your name and email
          address, when you voluntarily provide it to us, such as when signing
          up for an account or contacting us.
          <br />
          <br />
          2. Information Usage
          <br />
          We may use your personal information to provide and improve our
          services, communicate with you, and personalize your experience on our
          website. We will not sell or share your information with third parties
          without your consent, except as required by law.
          <br />
          <br />
          3. Cookies
          <br />
          We may use cookies and similar technologies to collect information
          about your browsing activities on our website. You can adjust your
          browser settings to refuse cookies, but this may affect your ability
          to access certain features of our website.
          <br />
          <br />
          4. Data Security
          <br />
          We implement reasonable security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or
          destruction.
          <br />
          <br />
          5. Third-Party Links
          <br />
          Our website may contain links to third-party websites or services that
          are not operated by us. We are not responsible for the privacy
          practices or content of these third-party sites.
          <br />
          <br />
          6. Children's Privacy
          <br />
          <br />
          Our website is not intended for children under the age of 13. We do
          not knowingly collect personal information from children under 13
          without parental consent.
          <br />
          <br />
          7. Changes to Privacy Policy
          <br />
          We reserve the right to update or revise this Privacy Policy at any
          time. We will notify you of any changes by posting the new Privacy
          Policy on this page.
          <br />
          <br />
          8. Contact Us
          <br />
          If you have any questions or concerns about this Privacy Policy,
          please contact us at 'cinemaroobd@gmail.com'.
          <br />
          <br />
          By accessing or using the CinemarooBD website, you acknowledge that
          you have read, understood, and agree to be bound by this Privacy
          Policy."
        />
        <Footer />
      </div>
    </div>
  );
}
