/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/logo_sl_oss.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const SnapshooterDescription = () => (
      <Block background="light">
        {[
          {
            content: `Snapshooter is a flexible .Net testing tool to simplify the validation
            of your test results in your unit / integration tests. It creates
            simply a snapshot of your test result and stores it alongside of your test. 
            When the test is executed again, the snapshooter will compare
            the actual test result with the stored snapshot. If both are
            the same, the test will pass.    
            <a
            class="button"
            href="https://swisslife-oss.github.io/snapshooter/">
            Website
          </a>
          <a
            class="button"
            href="https://github.com/SwissLife-OSS/snapshooter">
            GitHub
          </a>`,
            image: `${baseUrl}img/logo_sl_snapshooter.svg`,

            imageAlign: "left",
            title: `Snapshooter`
          }
        ]}
      </Block>
    );

    const SquadronDescription = () => (
      <Block background="light" >
        {[
          {
            content: `Squadron is a testing framework which enables
            you to write tests against dependent services without any overhead.
            Squadron can provide you isolation in tests with
            Container Providers or support for all other services with Cloud Providers.
            <a
            class="button"
            href="https://swisslife-oss.github.io/squadron/">
            Website
          </a>
          <a
            class="button"
            href="https://github.com/SwissLife-OSS/squadron">
            GitHub
          </a>`,
            image: `${baseUrl}img/logo_sl_squadron.png`,

            imageAlign: "right",
            title: `Squadron`
          }
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : "") + page;

      return (
        <div className="productShowcaseSection paddingBottom paddingTop">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl("users.html")}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <SnapshooterDescription />
          <SquadronDescription />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
