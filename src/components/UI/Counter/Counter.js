import React from "react";
import classes from './Counter.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cart-context";
import { useContext } from "react";

// 引入FontAwesome
    //    - 安装依赖
        //    npm i --save @fortawesome/fontawesome-svg-core
           // npm i --save @fortawesome/free-solid-svg-icons
           // npm i --save @fortawesome/free-regular-svg-icons

        //    npm i --save @fortawesome/react-fontawesome@latest

        //- 引入组件
//            import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    //    -引入图标
//            import faPlus from "@fortawesome/free-solid-svg-icons";
    //    -使用组件
    //        <FontAwesomeIcon icon={faPlus}/>



// 计数器的组件
const Counter = (props) => {

    // 获取cartContext
    const ctx = useContext(CartContext);

    // 添加购物车的函数
    const addButtonHandler = () => {
        // ctx.addItem(props.meal);
        ctx.cartDispatch({type: 'ADD', meal: props.meal});
    }

    // 减少购物车的函数
    const subMealHandler = () => {
        // ctx.removeItem(props.meal);
        ctx.cartDispatch({type: 'REMOVE', meal: props.meal});
    }

    return (
        <div className={classes.Counter}>
            {
                (props.meal.amount && props.meal.amount !== 0) ? (
                    <>
                        <button className={classes.Sub} onClick={subMealHandler}><FontAwesomeIcon icon={faMinus}/></button>
                        <span className={classes.Count}>{props.meal.amount}</span>
                    </>
                ) : null
            }
            <button 
                className={classes.Add}
                onClick={addButtonHandler}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    )
};

export default Counter;