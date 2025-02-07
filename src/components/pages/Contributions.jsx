import React from "react";
import "./privacy.css";

const ContributionsPage = () => {
  return (
    <div className="container">
      <h1>Contribute to Snap Out</h1>
      
      <h2>1. Introduction</h2>
      <p>
        Thank you for your interest in contributing to Snap Out! Whether you're
        fixing bugs, suggesting new features, or improving documentation, your
        contributions are highly valued.
      </p>
      
      <h2>2. How to Contribute</h2>
      <h3>Fork & Clone the Repository</h3>
      <p>
        Start by forking the Snap Out repository on GitHub and cloning it to
        your local machine.
      </p>
      <code>git clone https://github.com/yourusername/snap-out.git</code>
      
      <h3>Install Dependencies</h3>
      <p>
        Navigate to the project directory and install the necessary dependencies
        using npm or yarn.
      </p>
      <code>cd snap-out</code><br />
      <code>npm install</code>
      
      <h3>Make Your Changes</h3>
      <p>
        Create a new branch for your changes and start coding! Follow best
        practices and ensure your code is clean and well-documented.
      </p>
      <code>git checkout -b my-feature-branch</code>
      
      <h3>Commit & Push</h3>
      <p>
        Once you're done, commit your changes with a clear message and push the
        branch to your forked repository.
      </p>
      <code>git add .</code><br />
      <code>git commit -m "Added new feature"</code><br />
      <code>git push origin my-feature-branch</code>
      
      <h3>Submit a Pull Request</h3>
      <p>
        Open a pull request (PR) from your fork to the main repository and
        provide a detailed description of the changes.
      </p>
      
      <h2>3. Contribution Guidelines</h2>
      <ul>
        <li>Follow the project's coding style and best practices.</li>
        <li>Write clear commit messages.</li>
        <li>Test your changes before submitting a PR.</li>
        <li>Ensure there are no merge conflicts.</li>
      </ul>
      
      <h2>4. Reporting Issues</h2>
      <p>
        If you encounter any bugs or issues, please report them on the GitHub
        issues page. Be sure to include details on how to reproduce the problem.
      </p>
      
      <h2>5. Community & Support</h2>
      <p>
        Join our community discussions and stay updated on Snap Out’s
development.
        If you need help, feel free to reach out via GitHub issues or
        <a href="mailto:[YourContactEmail]">[YourContactEmail]</a>.
      </p>
    </div>
  );
};

export default ContributionsPage;
