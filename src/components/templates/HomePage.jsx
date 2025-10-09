import { useEffect, useState } from "react"
import TableCoin from "../modules/TableCoin.jsx"
import {getCoinList} from "../services/cryptoApi"
import Pagination from "../modules/Pagination"

function HomePage() {
    const [coins, setCoin] = useState([])
    const [isLoading,setLoading] = useState(true)
    const [page, setPage] = useState(1)
    
    useEffect(() => {
      setLoading(true)
      const getData = async () => {
        const res = await fetch(getCoinList(page))
        const json = await res.json()
        setCoin(json)
        setLoading(false)
      }
      getData()  
    }, [page])
  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading}/>
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}

export default HomePage