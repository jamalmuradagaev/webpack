import React, { useState } from "react";
import * as s from './App.module.scss';

const App = () => {
    const [count, setCount] = useState(0)
    console.log(s)

    return (
        <div>
            <button className={s.button} onClick={() => setCount((c) => c + 1)}><p> Click </p></button>
            <p className={s.text}>count is {count}</p>
        </div>
    )
}

export default App