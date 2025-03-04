export interface CoinAPI {
    id: string;
    market_cap_rank: number;
    name: string;
    image: string;
    symbol: string;
    current_price: number;
    price_change_percentage_1h_in_currency: number;
    price_change_percentage_24h_in_currency: number;
    price_change_percentage_7d_in_currency: number;
  }
  
  export interface CoinProps {
    id: string;
    marketCapRank: number;
    name: string;
    image: string;
    symbol: string;
    price: number;
    OneHr: number;
    TwoFourHr: number;
    SevenDays: number;
  }
  