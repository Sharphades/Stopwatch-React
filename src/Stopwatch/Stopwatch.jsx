import React, {useState, useEffect} from "react";
import styles from './stopwatch.module.css';

export default function Counter() {
    const [ms, setMS] = useState(0)
    const [seconds, setSeconds ] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [isCounting, setIsCounting] = useState(false)
    
 
    useEffect(() => {
        let mainCounter;
        if (isCounting) {
        mainCounter =  setInterval(() => {
             setMS(m => m + 1)
         },100)

         if (ms === 9) {
            setMS(0)
            setSeconds(s => s + 1)
            if (seconds === 59) {
                setSeconds(0)
                setMinutes(m => m + 1)
            }
         }
         
            return () => {
                clearInterval(mainCounter)
            }
        }
        },[ms, seconds, isCounting])

    function start() {
        setIsCounting(true)
    }

    function stop() {
        setIsCounting(false)
    }

    function reset() {
        setMS(0)
        setMinutes(0)
        setSeconds(0)
        setIsCounting(false)
    }

    function paddedZero(time) {
        return (time < 10 ? "0" : "") + time;
    }

    return(
    <div className={styles.container}>
        <h2 className={styles.title}>Simple Stopwatch</h2>
        <h1 className={styles.timer}>{paddedZero(minutes)}:{paddedZero(seconds)}:{paddedZero(ms)}</h1>
        <button className={styles.button} onClick={() => start()}>Start</button>
        <button className={styles.button} onClick={stop}>Stop</button>
        <button className={styles.button} onClick={reset}>Reset</button>
    </div>);
}