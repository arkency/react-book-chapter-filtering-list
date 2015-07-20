import React from 'react/addons';
import { ListGroup, ListGroupItem, Grid, Row, Input } from 'react-bootstrap';

class ChannelSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchQuery: '' };
    this.changeSearchQuery = this.changeSearchQuery.bind(this);
  }

  changeSearchQuery(ev) {
    this.setState({ searchQuery: ev.target.value });
  }

  render() {
    let { channels } = this.props;

    return (
      <Grid fluid={true}>
        <Row>
          <Input type="text" 
                 placeholder="Search channels…" 
                 bsSize="large"
                 value={this.state.searchQuery}
                 onChange={this.changeSearchQuery} />
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
