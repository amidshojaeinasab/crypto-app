import { useEffect, useState } from "react"
import { searchCoin } from "../services/cryptoApi"

function Search({currency, setCurrency}) {
  const [text, setText] = useState("")
  const [coin, setCoin] = useState([])

  useEffect(()=>{
    const controller = new AbortController()

    setCoin([])
    if(!text) return
    const search = async () => {
      try {
      const res = await fetch(searchCoin(text), {signal: controller.signal})
      const json = await res.json()
      console.log(json)
      if (json.coin){ setCoin(json.coin)
      } else{
        alert(json.status.error_message)
      }
      } catch (error) {
        if (error.name !== "AbortError")
          alert(error.message)
      }
    }
    search()
    return () => controller.abort
  },[text])
  return (
    <div>
        <input type="text" placeholder="Search" value={text} onChange={(e) => setText(e.target.value)} />
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="usd">USD</option>
            <option value="eru">ERU(inactive)</option>
            <option value="jyp">JYP(inactive)</option>
        </select>
        <div>
          <ul>
            {coin.map((coin) => (
              <li key={coin.id}>
                <img src={coin.thump} alt="coin.name" />
                <p>{coin.name}</p>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Search