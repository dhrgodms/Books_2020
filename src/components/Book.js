import React from "react";
import PropTypes from "prop-types";
//import './Movie.css';

function Book({id, year, title, summary, poster, genres}){
    return (
    <div className="book">
        <img src={poster} alt={title} title={title} />
        <div className="book__data">
            <h3 className="book__title">{title}</h3>
            <h5 className="book__year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index) =>( 
                <li key={index} className="genres__genre">{genre}</li>
            ))}
            </ul>
            <p className="book__summary">{summary}</p>
        </div>
    </div>
    );
}

Book.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Book;