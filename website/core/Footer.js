/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h3>Projects</h3>
            <a href={this.props.config.snapshooterUrl}>Snapshooter</a>
            <a href={this.props.config.squadronUrl}>Squadron</a>
            <a href={this.props.config.idopsUrl}>IdOps</a>
            <a href={this.props.config.magnetUrl}>Magnet</a>
          </div>
          <div>
            <h3>Community</h3>
            <a href={this.pageUrl("cla")}>Contributor License Agreements</a>
            <a href={this.pageUrl("coc")}>Code of Conduct</a>
            <a href="https://twitter.com/swisslife_oss" target="_blank">Twitter</a>
            <a href="https://join.slack.com/t/swisslife-oss/shared_invite/enQtNzk1ODI1NTAyNjExLTJmM2I2ODMxZjk4ZjBhYWIzY2U3YmI1ZGU3YmVjZGI0ZjA3MDllZGYwOGMxNjAwYTExMmFiMTQwMjhmNjY5ZTY" target="_blank">Slack</a>
          </div>
          <div>
            <h3>More</h3>
            <a href={this.pageUrl("blog")}>Blog</a>
            <a href={this.props.config.githubBaseUrl}>GitHub</a>
          </div>
        </section>
        <a
          href={this.props.config.url}
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource"
        >
          <img
            src={`${this.props.config.baseUrl}img/logo_sl_oss_inverted.svg`}
            alt="Swiss Life OSS"
            height="45"
          />
          <span className="projectTitleInverted">Swiss Life | OSS</span>
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
  /*
  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap" style={{display: 'none'}}>
          <div>
            <h3>Docs</h3>
            <a href="https://swisslife-oss.github.io/snapshooter">
             Snapshooter
            </a>            
          </div>
          <div>
            <h3>Community</h3>
            <a href="https://swisslife-oss.github.io/cla">Contributor License Agreements</a>
            <a href="https://discordapp.com/">Project Chat</a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h3>More</h3>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://github.com/swisslife-oss">GitHub</a>
          </div>
        </section>
        <a
          href={this.props.config.url}
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/logo_sl_oss_inverted.svg`}
            alt="Swiss Life OSS"
            height="45"
          />
          <span className="projectTitleInverted">Swiss Life | OSS</span>
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }*/
}

module.exports = Footer;
