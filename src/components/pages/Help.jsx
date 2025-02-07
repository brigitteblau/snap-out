import React from "react";
import "./privacy.css";
import "../../global.css"
const HelpPage = () => {
  return (
    <div className="container">
      <h1>Help & Support</h1>
      
      <h2>1. Introduction</h2>
      <p>
        Snap Out is a browser extension designed to help users block short-form
        video content (under 1 minute) across all websites. This page provides
        guidance on using the extension, troubleshooting common issues, and
        getting support.
      </p>
      
      <h2>2. How to Use</h2>
      <h3>Installation</h3>
      <p>
        To install Snap Out, go to the Chrome Web Store (or your browser’s
        extension store), search for "Snap Out," and click "Add to Chrome."
        Once installed, the extension will start working automatically.
      </p>
      
      <h3>Enabling & Disabling</h3>
      <p>
        - To enable or disable Snap Out, click on the extension icon in your
        browser toolbar and toggle the switch.
      </p>
      <p>
        - If you want to allow short videos on specific sites, go to the
        extension settings and add them to the whitelist.
      </p>
      
      <h2>3. Troubleshooting</h2>
      <h3>Common Issues & Fixes</h3>
      <ul>
        <li>
          <strong>The extension is not blocking videos:</strong> Make sure Snap
          Out is enabled in the browser extension settings.
        </li>
        <li>
          <strong>Not working on certain websites:</strong> Some websites update
          frequently. Check for updates to Snap Out in the extension store.
        </li>
        <li>
          <strong>Performance issues:</strong> Try restarting your browser or
          reinstalling the extension.
        </li>
      </ul>
      
      <h2>4. FAQ</h2>
      <h3>Can I allow short videos on some websites?</h3>
      <p>
        Not yet. Currently, Snap Out blocks all short videos, but we are working on this feature. Check back for updates in version 1.5!
      </p>
      
      <h3>Does Snap Out track my browsing data?</h3>
      <p>
        No. Snap Out operates entirely on your browser and does not store or
        transmit any personal data.
      </p>
      
      <h3>How do I uninstall Snap Out?</h3>
      <p>
        To uninstall Snap Out, go to your browser's extension settings, locate
        Snap Out, and click <b> "Remove." </b>This will completely remove the extension
        from your browser.
      </p>
      
      <h2>5. Contact & Support</h2>
      <p>
        If you need further assistance, please contact us at 
        <a href="mailto:[YourContactEmail]"> YourContactEmail</a>.
      </p>
    </div>
  );
};

export default HelpPage;
