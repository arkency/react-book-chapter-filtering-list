import React, { useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  Grid,
  Row,
  FormControl,
  FormGroup,
  Well
} from "react-bootstrap";

function ChannelSearch(props) {
  const [searchQuery, updateSearchQuery] = useState("");

  const changeSearchQuery = newSearchQuery => {
    updateSearchQuery(newSearchQuery);
  }

  const filteredChannels = () => {
    const { channels } = props;
    return channels.filter(channel => channel.indexOf(searchQuery) === 0);
  }

  const channels = filteredChannels();

  return (
    <Grid fluid={true}>
      <Row>
        <ChannelSearchInput
          searchQuery={searchQuery}
          onSearchQueryChanged={changeSearchQuery}
        />
        {channels.length === 0
          ? <NoValidChannels searchQuery={searchQuery} />
          : <Channels channels={channels} />}
      </Row>
    </Grid>
  );
}


function ChannelSearchInput(props) {
  const handleSearchQueryChange = ev => {
    const { onSearchQueryChanged } = props;
    onSearchQueryChanged(ev.target.value);
  }

  let { searchQuery } = props;

  return (
    <FormGroup>
      <FormControl
        type="text"
        placeholder="Search channels…"
        bsSize="large"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
    </FormGroup>
  );
}

function Channels(props) {
  const { channels } = props;

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

function NoValidChannels(props) {
  const { searchQuery } = props;

  return (
    <Well>
      There are no channels matching your query{" "}
      <strong>"{searchQuery}"</strong>.
    </Well>
  );
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
