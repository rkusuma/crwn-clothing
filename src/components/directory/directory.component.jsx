import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles.jsx';

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
