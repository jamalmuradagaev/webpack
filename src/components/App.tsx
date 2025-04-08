import React, { useState } from "react";
import './App.scss';

const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}><p> Click </p></button>
            <p>count is {count}</p>
        </div>
    )
}

export default App