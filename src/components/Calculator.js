import React, { useState } from 'react';
import styles from './css/Calculator.module.css';


const Calculator = () => {

const[number, setNumber] = useState('');
const[holdNumber, setHoldNumber] = useState('');
const[operation, setOperation] = useState('');

const changeNumber = (num) => { // 누르면 해당 숫자로 변경됨
    setNumber(number + num) 
}

const removeNumber = () => {
    if(number.length === 1) { // number.length가 1이면 setNumber 초기화
        setNumber('')
        
    } else { 
        setNumber(number.slice(0, number.length - 1)) // number.length가 1이 아니면 number.length에서 하나씩 삭제
    }
}

const clickOperation = (oper) => {
    if(number.length !== 0) {
        setOperation(oper)
        setHoldNumber(number)
        setNumber('')
    }
}

const onCalculation = () => {
    switch(operation) {

        case '%' :
            setNumber(parseFloat(holdNumber) % parseFloat(number) + '')
            break;
            
        case '/' :
            setNumber(parseFloat(holdNumber) / parseFloat(number) + '')
            break;

        case '*' :
            setNumber(parseFloat(holdNumber) * parseFloat(number) + '')
            break;

        case '-' :
            setNumber(parseFloat(holdNumber) - parseFloat(number) + '')
            break;

        case '+' :
            setNumber(parseFloat(holdNumber) + parseFloat(number) + '')
            break;

        default :
            break;
    }
}

    return (
        <div className={styles.cal_container}>
            <h3 style={{ textAlign : 'center' }}>지나의 계산기</h3>
                <div className={ styles.cal_main }>
                    <div className={ styles.showbox }>
                        <div className={ styles.show_num }>{ number.length > 0 ? number : '0' }</div>
                    </div>
                    <div className={ styles.cal_btn }>
                        <button className={ styles.btn_x } onClick={ () => setNumber('') }>AC</button>
                        <button className={ styles.btn_x } onClick={ () => clickOperation('%') }>%</button>
                        <button className={ styles.btn_x } onClick={ () => clickOperation('/') }>/</button>
                        <button className={ styles.btn_y } style={{ fontSize : '17px', textAlign : 'center' }} onClick={ removeNumber }>Back</button>
                        
                        <button className={ styles.btn_other } onClick={ () => changeNumber(7) }>7</button>
                        <button className={ styles.btn_other } onClick={ () => changeNumber(8) }>8</button>
                        <button className={ styles.btn_other } onClick={ () => changeNumber(9) }>9</button>
                        <button className={ styles.btn_y } onClick={ () => clickOperation('*') }>x</button>
                    
                        <button className={ styles.btn_other } onClick={ () => changeNumber(4) }>4</button>
                        <button className={ styles.btn_other } onClick={ () => changeNumber(5) }>5</button>
                        <button className={ styles.btn_other } onClick={ () => changeNumber(6) }>6</button>
                        <button className={ styles.btn_y } onClick={ () => clickOperation('-') }>-</button>
                    
                        <button className={ styles.btn_other } onClick={ () => changeNumber(1) }>1</button>
                        <button className={ styles.btn_other } onClick={ () => changeNumber(2) }>2</button>
                        <button className={ styles.btn_other } onClick={ () => changeNumber(3) }>3</button>
                        <button className={ styles.btn_y } onClick={ () => clickOperation('+') }>+</button>
                    
                        <button className={ styles.btn_other2 } onClick={ () => changeNumber(0) }>0</button>
                        <button className={ styles.btn_other } onClick={ () => changeNumber(".")}>.</button>
                        <button className={ styles.btn_y } onClick={ onCalculation }>=</button>
                    </div>
                </div>
        </div>
    );
};

export default Calculator;