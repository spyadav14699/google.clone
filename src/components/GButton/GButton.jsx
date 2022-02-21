import React from 'react';
import PropTypes from 'prop-types';
import './GButton.scss';

function GButton(props) {
  const { text, onClick } = props;
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
}

GButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

GButton.defaultProps = {
  onClick: null,
};

export default GButton;
