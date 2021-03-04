import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({ sections }) => (
  <>
    <div className="title">WELCOME TO MY SHOP!!! </div>
    <div className="directory-menu">

      {
        sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps }/> 
          //using spread operator, otherSectionProps is just equivalent to title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}
        ))
      }
    </div>
  </>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);