import React, {Component} from 'react';
import ReactDom from 'react-dom';
import injectSheet from 'react-jss';
import sheet from '../style/style.js';

@injectSheet(sheet)
export default class TestBody extends Component {
  render() {
    const {classes, children} = this.props;
    console.log('classes', classes);
    return (
      <div className={classes.testBody}>
        <h1 className={classes.testH1}>TEST</h1>
        <p className={classes.testParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

    )
    
}


/*
return (
      <div className={classes.testBody}>
        <h1 className={classes.testH1}>TEST</h1>
        <p className={classes.testParagraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    )
  }
*/