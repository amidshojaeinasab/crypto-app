import { useEffect, useState } from "react"
import TableCoin from "../modules/TableCoin.jsx"
import {getCoinList} from "../services/cryptoApi"
import Pagination from "../modules/Pagination"
import Search from "../modules/Search.jsx"
import Chart from "../modules/Chart.jsx"

function HomePage() {
    const [coins, setCoin] = useState([])
    const [isLoading,setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [currency, setCurrency] = useState("usd")
    const [chart, setChart] = useState(null)

    useEffect(() => {
      setLoading(true)
      const getData = async () => {
       try {
        const res = await fetch(getCoinList(page,currency))
        const json = await res.json()
        setCoin(json)
        setLoading(false)
       } catch (error) {
        console.log(error)
       }
      }
      getData()  
    }, [page,currency])
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency}/>
      <TableCoin coins={coins} isLoading={isLoading} setChart={setChart}/>
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  )
}

export default HomePage