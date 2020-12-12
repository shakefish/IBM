import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import { Button, Modal, Dropdown, Container, Grid } from 'semantic-ui-react'

const Dashboard = () => {
  




  return(
    <Container>
      <Grid columns={2} stackable stretched reversed="mobile vertically">
        <Grid.Column width={13}>
          
        </Grid.Column>
        <Grid.Column width={3} style={{ paddingLeft: '0px' }}>
          
        </Grid.Column>
      </Grid>
      <Grid columns={1}>
        <Grid.Column width={16} style={{ paddingTop: '0px' }} stretched>
          
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Dashboard;
