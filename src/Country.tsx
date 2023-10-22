import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue:(filterValue:BanknotsType)=>void // давайте подумаем, setFilter -это гоузчик, у которого всегда в руках товар
  }

export const Country:React.FC<CountryPropsType> = (props) => {
    const {data,setFilterValue}=props

    const onClickButtonHandler = (filter:BanknotsType) => {
        setFilterValue(filter)
    }


    const setAll = () => {
        // засетаем 'All'
    }

    const setDollars = () => {
        // засетаем 'Dollars'
    }

    const setRUBLS = () => {
        // засетаем 'RUBLS'
    }

    return (
        <div>
            <button onClick={()=>{onClickButtonHandler('All')}}>All</button>
            <button onClick={()=>{onClickButtonHandler('Dollars')}}>Dollars</button>
            <button onClick={()=>{onClickButtonHandler('RUBLS')}}>RUBLS</button>
            <City data={data}/>
        </div>
    );
};

