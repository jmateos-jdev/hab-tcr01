import PropTypes from 'prop-types';

export default function Button({onClick, children}) {
    return (
    <button 
    style={{backgroundColor: 'blue', color: 'white'}} 
    onClick={onClick}>
        {children}
    </button>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}



