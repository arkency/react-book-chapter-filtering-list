import React from 'react/addons';
import { ListGroup, ListGroupItem, Grid, Row, Input } from 'react-bootstrap';

class ChannelSearch extends React.Component {
  render() {
    let { channels } = this.props;

    return (
      <Grid fluid={true}>
        <Row>
          <Input type="text" placeholder="Search channels…" bsSize="large" />
          <Channels channels={channels} />
        </Row>
      </Grid>
    );
  }  
}

class Channels extends React.Component {
  render() {
    let { channels } = this.props;

    return (
      <ListGroup>
        {channels.map(channel =>
          <ListGroupItem key={channel} href={`#${channel}`}>
            #{channel}
          </ListGroupItem>
        )}
      </ListGroup>
    );    
  }
}

ChannelSearch.defaultProps = {
  channels: [
    "reactjs",
    "general",
    "random",
    "flux",
    "relay",
    "immutablejs",
    "flow",
    "webpack",
    "babel"
  ]
};

export default ChannelSearch;
