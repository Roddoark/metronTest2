import React from 'react'
import PropTypes from 'prop-types';

const Tweet = (props) => {
  const { author, date, message } = props
  return (
    <div>
      <h3>{author} - {date}</h3>
      <p>{message}</p>
    </div>
  )
}

Tweet.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string.isRequired,
};

export default Tweet
