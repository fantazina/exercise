import React, { useState } from 'react';
import styles from './css/Calculator.module.css';


const Calculator = () => {

const[number, setNumber] = useState('');
const[holdNumber, setHoldNumber] = useState('');
const[operation, setOperation] = useState('');

const changeNumber = (changeNum) => {
    setNumber(number + changeNum) // String(number) + 로 문자열을 숫자로 변경, 예) 10과 5를 눌렸을 경우 각각의 수를 문자열로 변환하여                                                  // + 연산자로 연결되어 parseFloat(부동소수점으로) 출력 
}

const removeNumber = () => {
        if(number.length === 1) {
            setNumber('')
        } else {
            setNumber(number.slice(0, number.length - 1))
        }
}

const clickOperation = (operNum) => {
    if(number.length !== 0){
        setOperation(operNum)
        setHoldNumber(number)
        setNumber('')
    }
}

const onCalculation = () => {

    switch(operation){
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
        <div>
            <h3>지나의 계산기</h3>
                <div className={ styles.cal_main }>
                    <div className={ styles.showbox } >
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
                        <button className={ styles.btn_y }  onClick={ onCalculation }>=</button>
                    </div>
                </div>
        </div>
    );
};

export default Calculator;