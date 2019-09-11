import React, { Component } from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {

  componentDidMount() {
    console.log('Hi');
    //DISPATCH HERE!
    this.props.dispatch({type: 'FETCH_NOTE'});
  }

  render() {

    const notesArray = this.props.store.noteReducer.map((item, index) => {
      return <p>{item.note}</p>
    })

    return (
      <div>
        <p>
          {notesArray}
        </p>
      </div>
    )
  }
}

const mapStateToProps = store => ({
    store
});

export default connect(mapStateToProps)(InfoPage);
