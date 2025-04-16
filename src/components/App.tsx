import React, { useState } from "react";
import * as s from './App.module.scss';
import { Link, Outlet } from "react-router-dom";

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
            <Outlet />
        </div>
    )
}

export default App