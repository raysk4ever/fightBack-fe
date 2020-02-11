import React from 'react';
import './nav.scss'

class Nav extends React.Component {
  state = {  }
  render() {
    const { brandName } = this.props; 
    return ( 
      <div className='nav-container'>
        <span>{brandName}</span>
      </div>
     );
  }
}
 
export default Nav;