import React, { Component } from 'react';
import fetchSong from '../queries/fetchSong';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import LyricCreate from './LyricCreate';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;
    console.log(song);
    if (!song) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to={'/'}>Back</Link>
        <h3>{song.title}</h3>
        <LyricCreate songId={this.props.match.params.id} />
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: ({ match }) => {
    return { variables: { id: match.params.id } };
  },
})(SongDetail);
