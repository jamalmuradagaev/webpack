import React, { useState } from "react";
import * as s from './App.module.scss';
import { Link } from "react-router-dom";
import About from "@/pages/About/About";

const App = () => {
    const [count, setCount] = useState(0)
    console.log(s)

    return (
        <div>
            <div>
                <Link to={'/about'}>about</Link>
                <Link to={'/shop'}>shop</Link>
            </div>
            <button className={s.button} onClick={() => setCount((c) => c + 1)}><p> Click </p></button>
            <p className={s.text}>count is {count}</p>
            <About />
        </div>
    )
}

export default App