import React from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

import TextCart from "../Cart/TextCart";

export default function TermsofService() {
  return (
    <div className="body">
      <Header />
      <div className="box">
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
