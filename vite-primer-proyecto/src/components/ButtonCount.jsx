import { useState } from 'react';

export default function ButtonCount() {
    const [count, setCount] = useState(0);

    const handleClick = () => { 
        setCount(count + 1);
    }

    return <><button onClick={handleClick}>Aumentar</button>
    <p>Contador: {count}</p></>;
}