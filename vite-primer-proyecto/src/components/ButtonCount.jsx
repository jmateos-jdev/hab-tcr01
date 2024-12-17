import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ButtonCount({initialCount = 0}) {
    const [count, setCount] = useState(initialCount);

    const handleClick = () => { 
        setCount(count + 1);
    }

    return <><button onClick={handleClick}>Aumentar</button>
    <p>Contador: {count}</p></>;
}

ButtonCount.propTypes = {
    initialCount: PropTypes.number
}
