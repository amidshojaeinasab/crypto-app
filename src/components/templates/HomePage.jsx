import { useEffect, useState } from "react"
import TableCoin from "../modules/TableCoin"
import {getCoinList} from "../services/cryptoApi"

function HomePage() {
    const [coins, setCoin] = useState([])
    
    useEffect(() => {
        fetch(getCoinList())
        .then((res) => res.json())
        .then((json) => setCoin(json))
    }, [])
  return (
    <div><TableCoin coins={coins}/></div>
  )
}

export default HomePage