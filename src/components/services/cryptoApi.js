﻿const BASE_URL = "https://api.coingecko.com/api/v3"
const API_URL = "CG-jjd2orpnDTP1qTdimNgu1udx"

const getCoinList = () => {
    return `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&x_cg_demo_api_key=${API_URL}`
}
export {getCoinList}


