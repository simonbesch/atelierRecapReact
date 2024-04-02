import PropTypes from 'prop-types';

function PropState ({lesProps, lesStates}) {
    return(
        <div className="TouchePasMonCode">
            <h2>Quesque cest que ca ?</h2>
            <h3>{lesProps}</h3>
            <p>
                Les props renvoient des données entre les composants.
            </p>
            <h3>{lesStates}</h3>
            <p>
                Permet de re-rendre que certain éléments qui peuvent changer.
            </p>
        </div>
    )

}

export default PropState;

PropState.propTypes = {
    lesProps: PropTypes.string,
    lesStates: PropTypes.string
};