import { useState } from 'react';

function Contador() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}

export default Contador;
