﻿import { RotatingLines } from "react-loader-spinner"

import chartUp from "../../assets/chart-up.svg"
import chartDown from "../../assets/chart-down.svg"

import styles from "./TableCoin.module.css"
import { marketChart } from "../services/cryptoApi"

function TableCoin({coins, isLoading, setChart,}) {


  
    console.log(coins)
  return (
    <div className={styles.container}>
      {isLoading ? (<RotatingLines strokeColor="#3874ff" strokeWidth={2}/>) : 
      (<table className={styles.table}>
       <thead>
         <tr>
          <th>Coin</th>
          <th>Name</th>
          <th>Price</th>
          <th>24h</th>
          <th>Total Volume</th>
          <th></th>
        </tr>
       </thead>
       <tbody>
        {coins.map((coin) =>( 
          <TableRow coin={coin} key={coin.id} setChart={setChart}/>
        ))}
       </tbody>
      </table>)
}
    </div>
  )
}

export default TableCoin

const TableRow = ({coin , setChart,}) => {

   const showHandler = async () =>{
      try {
        const res = await fetch(marketChart(coin.id))
        const json = await res.json()
        console.log(json)
        setChart(json)
      } catch (error) {
        setChart(null)
      }
    }

  return(
    <tr>
            <td>
              <div className={styles.symbol} onClick={showHandler}>
                <img src={coin.image} alt="" />
                <span>{coin.symbol.toUpperCase()}</span>
              </div>
            </td>
            <td>{coin.name}</td>
            <td>${coin.current_price.toLocaleString()}</td>
            <td className={coin.price_change_percentage_24h > 0 ? styles.success : styles.error}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
            <td>{coin.total_volume.toLocaleString()}</td>
            <td><img src={coin.price_change_percentage_24h > 0 ? chartUp : chartDown } alt="" /></td>
    </tr>
  )
}