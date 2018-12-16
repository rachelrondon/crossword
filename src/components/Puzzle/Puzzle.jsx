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
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
        </div>
        <div className="crossWordRow">
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
        </div>
        <div className="crossWordRow">
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
        </div>
        <div className="crossWordRow">
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
        </div>
        <div className="crossWordRow">
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
          <input className="crossWordInput" type="text" name="name" />
        </div>
      </div>
    )
  }


}

export default Puzzle;
