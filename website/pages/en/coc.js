const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Code of Conduct</h1>
            </div>
            <div>
              <script src="https://gist.github.com/swisslife-bot/7845861aba6726fbf32fab0781cdef0d.js"></script>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
