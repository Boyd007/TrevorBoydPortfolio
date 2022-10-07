import React, { Component } from "react";
import "./projects.scss";

class Portfolio extends Component {
  render() {
    return (
      <section id="projects">
        <div className="projects">
          <div className="twelve columns collapsed">
            <h1>A Few Projects I Have Been Working On</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://boyd007.github.io/Personal-Weather-Dashboard/"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="images/thumbs/06.jpg" alt="final-capstone" />
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Your Personal Weather App</h3>
                      <p>This application was developed to allow the user to view various weather parameters and recall recent cities searched</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="https://boyd007.github.io/Work-Day-Scheduler/"
                            className="button project-button"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Demo
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://boyd007.github.io/Strong-Password-Generator/"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-nodejs-plain colored technology"></i>
                        <i className="devicon-react-plain-wordmark colored technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://4ob4p.codesandbox.io/"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="images/thumbs/08.jpg" alt="pic-some" />
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>College-wiki</h3>
                      <p>An all</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="https://github.com/aparnay2002/College-wiki"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-css3-plain-wordmark colored technology"></i>
                        <i className="devicon-react-plain-wordmark colored technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://eb8fe.codesandbox.io/"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="images/thumbs/09.jpg" alt="final-capstone" />
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Twitter Clone</h3>
                      <p>Developed tw</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="https://github.com/aparnay2002/twitterclone"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-react-plain-wordmark colored technology"></i>
                        <i class="devicon-mongodb-plain colored technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://5dq86.codesandbox.io/"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="images/thumbs/10.jpg" alt="final-capstone" />
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Todo - List</h3>
                      <p>Developed a Tod</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper"></div>
                      <div className="languages">
                        <i className="devicon-css3-plain-wordmark colored technology"></i>
                        <i className="devicon-javascript-plain colored technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
