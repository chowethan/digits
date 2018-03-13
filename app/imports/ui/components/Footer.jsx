import React from 'react';
import { Container } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
        <footer>
          <Container fluid textAlign="center" className="footer">
            Department of Information and Computer Sciences <br />
            University of Hawaii<br />
            Honolulu, HI 96822
          </Container>
        </footer>
    );
  }
}

export default Footer;
