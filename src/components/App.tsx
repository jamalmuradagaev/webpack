import React, { useState } from "react";
import * as s from './App.module.scss';
import { Link } from "react-router-dom";
import About from "@/pages/About/About";
import imagePng from "@/assets/image2.png"
import imageJpg from "@/assets/image1.jpg"
import ImageSvg from '@/assets/car-wheel-svgrepo-com.svg'

const App = () => {
    const [count, setCount] = useState(0)
    console.log(s)

    if (__PLATFORM__ === 'desktop') {
        return <div>PLATFOM IS DESKTOP</div>
    }

    if (__PLATFORM__ === 'mobile') {
        return <div>PLATFOM IS MOBILE</div>
    }

    return (
        <div>
            <div>
                <img src={imageJpg} width={'200px'}/>
                <img src={imagePng} width={'200px'} />
            </div>
            <div>
                <ImageSvg style={{fill: 'green'}} width={100} height={100}/>
            </div>
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