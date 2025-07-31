import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieCard({id, title}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <Link to={`/movie/${id}`}>View Info</Link>
    </article>
  );
};

MovieCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieCard;