import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Click</button>
            <p>count is {count}</p>
        </div>
    )
}

export default App