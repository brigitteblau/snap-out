import React, { useEffect, useState } from "react";
 import "./privacy.css";
import "../../global.css"
const PrivacyPolicy = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    setDate(currentDate);
  }, []);

  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <h2>Snap Out</h2>
      <p>Last update: {date}</p>
      
      <h3>1. Introduction</h3>
      <p>
        Snap Out is a browser extension designed to block
        videos shorter than one minute, helping users reduce addictive content
        consumption. Your privacy is important to us, and this Privacy Policy
        explains how we collect, use, and protect your data.
      </p>
      
      <h3>2. Data Collection</h3>
      <p>
        Snap Out does not collect, store, or share any personal data from its
        users. The extension operates locally on your device and does not
        transmit any information to external servers.
      </p>
      
      <h3>3. Permissions and Data Usage</h3>
      <p>
        To function properly, Snap Out requires access to:
      </p>
      <ul>
        <li>The content of web pages to identify and block short videos.</li>
        <li>All open browser tabs to apply the filtering rules consistently.</li>
      </ul>
      <p>
        These permissions are strictly used for the core functionality of the
        extension and are not used for tracking or collecting user information.
      </p>
      
      <h3>4. Third-Party Services</h3>
      <p>
        Snap Out does not use third-party analytics, tracking services, or
        external APIs. It functions entirely within your browser without
        communicating with external services.
      </p>
      
      <h3>5. Security</h3>
      <p>
        Since no personal data is collected or transmitted, there is no risk of
        data breaches or unauthorized access related to this extension.
      </p>
      
      <h3>6. Changes to this Privacy Policy</h3>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        reflected in the updated version available in the extension listing or
        on our website.
      </p>
      
      <h3>7. Contact Information</h3>
      <p>
        If you have any questions about this Privacy Policy, please contact us at
       <a href="mailto:" className="mail"> Your contact email</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
