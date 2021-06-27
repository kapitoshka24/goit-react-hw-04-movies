import React from "react";
import "../styles/reviews.scss";
import PropTypes from "prop-types";

const Reviews = ({ reviews }) => (
  <>
    {reviews.length > 0 ? (
      <ul className="reviews">
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>"{content}"</p>
          </li>
        ))}
      </ul>
    ) : (
      <p className="not-info">We don't have any reviews for this movie.</p>
    )}
  </>
);

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
