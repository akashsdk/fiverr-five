import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import TextCart from "../Cart/TextCart";

export default function FAQ() {
  return (
    <div className="body">
      <Header />
      <div className="box">
        <TextCart headerText="FAQ" bodyText="" />
        <p>
          Q: Is CinemarooBD completely free to use? A: Yes, CinemarooBD is
          entirely free for users. You can access our extensive library of
          movies and shows without any subscription fees or hidden charges.
          <br />
          <br />
          Q: Do I need to create an account to watch content on CinemarooBD? A:
          No, you can browse and watch content on CinemarooBD without creating
          an account. However, creating an account allows you to personalize
          your experience and access additional features.
          <br />
          <br />
          Q: Is the content on CinemarooBD legal? A: Yes, all content available
          on CinemarooBD is obtained through legal means. We have partnerships
          with content providers and adhere to copyright laws and regulations.
          <br />
          <br />
          Q: Can I download movies or shows for offline viewing? A: Currently,
          CinemarooBD does not support downloading content for offline viewing.
          However, you can stream content online at any time.
          <br />
          <br />
          Q: How frequently is new content added to CinemarooBD? A: We strive to
          regularly update our library with new releases and popular titles. New
          content is added periodically to ensure a fresh and diverse selection
          for our users.
          <br />
          <br />
          Q: How can I report a technical issue or suggest a feature? A: If you
          encounter any technical issues or have suggestions for improving
          CinemarooBD, please reach out to us at{" "}
          <a href="mailto:cinemaroobd@gmail.com">cinemaroobd@gmail.com</a>. We
          value your feedback and are committed to enhancing your experience.
          <br />
          <br />
          Q: Is CinemarooBD available on mobile devices? A: Yes, CinemarooBD is
          accessible on various devices, including smartphones and tablets. You
          can enjoy seamless streaming on the go by visiting our website through
          your mobile browser.
          <br />
          <br />
          Q: How can I contact CinemarooBD for further assistance? A: For any
          further inquiries or assistance, please contact us at
          <a href="mailto:cinemaroobd@gmail.com">cinemaroobd@gmail.com</a>. Our
          team is here to help and will respond to your queries promptly.
        </p>
        <Footer />
      </div>
    </div>
  );
}
