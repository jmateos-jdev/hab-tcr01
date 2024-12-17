import PropTypes from 'prop-types';

export default function CountMsg({count}) {
    return <p>El valor del contador es: {count}</p>;
}

CountMsg.propTypes = {
    count: PropTypes.string.isRequired
}

