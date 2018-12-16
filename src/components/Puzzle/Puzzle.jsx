import React, {Component} from 'react';
import styles from './Puzzle.css';

class Puzzle extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div className="crossWordBox">
        <div className="crossWordRow">
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
        </div>
        <div className="crossWordRow">
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
        </div>
        <div className="crossWordRow">
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
        </div>
        <div className="crossWordRow">
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
        </div>
        <div className="crossWordRow">
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
          <input className="crossWordInput uppercase" type="text" name="name" maxLength="1" />
        </div>
      </div>
    )
  }
}

export default Puzzle;
