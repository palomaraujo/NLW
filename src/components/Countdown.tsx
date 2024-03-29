import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css'

//Para evitar que o timeout execute pela ultima vez antes de parar
let countdownTimeout: NodeJS.Timeout;

export function Countdown(){

    const [time, setTime] = useState(25*60); //25 minutos em segundos
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        //Para a execução do countdown sem que o timeout execute mais uma vez
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25*60);
    }

    useEffect(() => {
        if(isActive && time>0){
            countdownTimeout = setTimeout(() => {
                setTime(time-1);
            },1000)
        } else if(isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive,time])

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                disabled
                className={styles.countdownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                        type="button" 
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={resetCountdown}
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                            <button 
                            type="button" 
                            className={styles.countdownButton}
                            onClick={startCountdown}
                            >
                                Iniciar um ciclo
                            </button>
                        )}
                </>
            ) }

             

            

            

            

        </div>
    );
}