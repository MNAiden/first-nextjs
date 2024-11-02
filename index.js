import { useState } from 'react';

export default function Home() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Hello, Aiden Strong!</h1>
            <h2>Counter Component</h2>
            <p>Count: {count}</p>
            <button onClick={increment} style={{ margin: '5px' }}>Increment</button>
            <button onClick={decrement} style={{ margin: '5px' }}>Decrement</button>
        </div>
    );
}
