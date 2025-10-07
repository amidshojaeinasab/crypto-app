import { useEffect, useState } from "react"
import TableCoin from "../modules/TableCoin"
import {getCoinList} from "../services/cryptoApi"

function HomePage() {
    const [coins, setCoin] = useState([])
    const [isLoading,setLoading] = useState(true)
    
    useEffect(() => {
      const getData = async () => {
        const res = await fetch(getCoinList())
        const json = await res.json()
        setCoin(json)
        setLoading(false)
      }
      getData()  
    }, [])
  return (
    <div><TableCoin coins={coins} isLoading={isLoading}/></div>
  )
}

export default HomePage