import React, { useState } from 'react';
import styles from './css/Calculator.module.css';


const Calculator = () => {
    const[newNumber, setNewNumber] = useState('')
    const[holdNumber, setHoldNumber] = useState('')
    const[operation, setOperation] = useState('')

const inputNumber = (num) => {
    setNewNumber(newNumber + num)
}

const removeNumber = () => {
    if(newNumber.length === 1) {
        setNewNumber('')
    } else {
        setNewNumber(newNumber.slice(0, newNumber.length -1))
    } 
}

const clickOperation = (oper) => {
    if(newNumber !== '') {
        setOperation(oper)
        setHoldNumber(newNumber)
        setNewNumber('')

    }
}   

const onCalculator = () => {
    switch(operation) {
        case '%' :
            setNewNumber(parseFloat(holdNumber) % parseFloat(newNumber) + '')
            break;

        case '/' :
            setNewNumber(parseFloat(holdNumber) / parseFloat(newNumber) + '')
            break;

        case '*' :
            setNewNumber(parseFloat(holdNumber) * parseFloat(newNumber) + '')
            break;

        case '-' :
            setNewNumber(parseFloat(holdNumber) - parseFloat(newNumber) + '')
            break;

        case '+' :
            setNewNumber(parseFloat(holdNumber) + parseFloat(newNumber) + '')
            break;

        default :
            break;
    }
}

const clearAll = () => {
    setHoldNumber('')
    setOperation('')
    setNewNumber('')

}
    return (
        <div className={styles.cal_container}>
            <h3 style={{ textAlign : 'center' }}>지나의 계산기</h3>
                <div className={ styles.cal_main }>
                    <div className={ styles.showbox }>
                        <div className={ styles.show_num }>{ newNumber.length > 0 ? newNumber : holdNumber.length > 0 ? holdNumber : '0' }</div>
                    </div>

                    <div className={ styles.cal_btn }>
                        <button className={ styles.btn_x } onClick={ () => clearAll() }>AC</button>
                        <button className={ styles.btn_x } onClick={ () => clickOperation('%')}>%</button>
                        <button className={ styles.btn_x } onClick={ () => clickOperation('/')}>/</button>
                        <button className={ styles.btn_y } style={{ fontSize : '17px', textAlign : 'center' }} onClick={ () => removeNumber() } >Back</button>
                        
                        <button className={ styles.btn_other } onClick={ () => inputNumber(7) }>7</button>
                        <button className={ styles.btn_other } onClick={ () => inputNumber(8) }>8</button>
                        <button className={ styles.btn_other } onClick={ () => inputNumber(9) }>9</button>
                        <button className={ styles.btn_y } onClick={ () => clickOperation('*') }>x</button>
                    
                        <button className={ styles.btn_other } onClick={ () => inputNumber(4) }>4</button>
                        <button className={ styles.btn_other } onClick={ () => inputNumber(5) }>5</button>
                        <button className={ styles.btn_other } onClick={ () => inputNumber(6) }>6</button>
                        <button className={ styles.btn_y } onClick={ () => clickOperation('-') }>-</button>
                    
                        <button className={ styles.btn_other } onClick={ () => inputNumber(1) }>1</button>
                        <button className={ styles.btn_other } onClick={ () => inputNumber(2) }>2</button>
                        <button className={ styles.btn_other } onClick={ () => inputNumber(3) }>3</button>
                        <button className={ styles.btn_y } onClick={ () => clickOperation('+') }>+</button>
                    
                        <button className={ styles.btn_other2 } onClick={ () => inputNumber(0) }>0</button>
                        <button className={ styles.btn_other } onClick={ () => inputNumber('.') }>.</button>
                        <button className={ styles.btn_y } onClick={ () => onCalculator() }>=</button>
                    </div>
                </div>
        </div>
    );
};

export default Calculator;