import React from 'react';
import { Container, Header, Grid, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Container fluid>
          <Container fluid className="landing-background" textAlign="center">
            <Header inverted as="h1">Digits</Header>
            <Header inverted as="h2">A simple to use address book with a clean interface.</Header>
          </Container>
          <Grid container centered stackable textAlign='center' columns={3} className="landing-content">
            <Grid.Column textAlign="center">
              <Icon size="big" name="users" />
              <div className="heading">Multiple Users</div>
              <span>The address book enables any number of users to register and save their business contacts. You can only view the contacts you have created.</span>
            </Grid.Column>

            <Grid.Column textAlign="center">
              <Icon size="big" name="file text" />
              <div className="heading">Contact Details</div>
              <span>For each contact, you can save their name, address, and phone number.</span>
            </Grid.Column>

            <Grid.Column textAlign="center">
              <Icon size="big" name="calendar check" />
              <div className="heading">Timestamped Notes</div>
              <span>Each time you make contact with a contact, you can write a note that summarizes the conversation. This note is saved along with a timestamp with the contact.</span>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default Landing;
