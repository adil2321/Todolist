
import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType

}
export const CurrentBankomat: React.FC<CurrentBankomatPropsType> = (props) => {

    const {money,} = props





    return (

           <>
               <div style={{color: 'aquamarine'}}>aaaaaaa</div>
               <Banknote colors={money.banknotes === 'Dollars' ? 'aquamarine' : 'blue' }>
                   <Name>{money.banknotes}</Name>
                   <Nominal>{money.value}</Nominal>
               </Banknote>

           </>



    );
};


type PropsTypeColor={
    colors:string
}


const Banknote = styled.div<PropsTypeColor>`
  background-color: ${(props) => props.colors};
  width: 400px;
  height: 200px;
  margin: 10px;
`



const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;

`

const Nominal = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 90px;

`









//---------------------------------------------------------------------
/*import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat: React.FC<CurrentBankomatPropsType> = (props) => {

    const {money} = props


    return (

        money.banknotes === 'Dollars'
            ? <DolarsAkwaMarine>
                <Name>{money.banknotes}</Name>
                <Nominal>{money.value}</Nominal>


            </DolarsAkwaMarine>
            : <Rubls>
                <Name>{money.banknotes}</Name>
                <Nominal>{money.value}</Nominal>
            </Rubls>


    );
};


const DolarsAkwaMarine = styled.div`
  background-color: aqua;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const Rubls = styled.div`
  background-color: blue;
  width: 400px;
  height: 200px;
  margin: 10px;

`
const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;

`

const Nominal = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 90px;

`*/


