const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            {/*
            <div className="prose">
              <h1>Contributor License Agreement</h1>
            </div>
            */}
            <script src="https://gist.github.com/swisslife-bot/6a7e35aeb9f45f62a356b10ee488def4.js"></script>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
