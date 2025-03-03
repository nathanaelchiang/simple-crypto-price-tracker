import React from "react";
import { useRouter } from "next/router";
import { CoinProps } from "../types";

const Coin: React.FC<CoinProps> = ({
  id,
  marketCapRank,
  name,
  image,
  symbol,
  price,
  OneHr = 0, // Default to 0 if undefined
  TwoFourHr = 0,
  SevenDays = 0,
}) => {
  const router = useRouter();

  return (
    <tr
      className="shadow-sm"
      style={{ cursor: "pointer" }}
      key={id}
      onClick={() => router.push(`/ticker/${id}`)}
    >
      <td className="text-center">{marketCapRank}</td>
      <td className="text-center">
        <img
          src={image}
          alt={`${name} icon`}
          className="object-center object-contain h-10 w-10 mx-auto rounded-full"
        />
      </td>
      <td className="text-center font-bold">{name}</td>
      <td className="text-center">{symbol.toUpperCase()}</td>
      <td className="text-center font-bold">
        {price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 7,
        })}
      </td>
      <td className={`text-center ${OneHr < 0 ? "text-red-600" : "text-green-600"}`}>
        {OneHr !== null ? `${OneHr.toFixed(2)}%` : "N/A"}
      </td>
      <td className={`text-center ${TwoFourHr < 0 ? "text-red-600" : "text-green-600"}`}>
        {TwoFourHr !== null ? `${TwoFourHr.toFixed(2)}%` : "N/A"}
      </td>
      <td className={`text-center ${SevenDays < 0 ? "text-red-600" : "text-green-600"}`}>
        {SevenDays !== null ? `${SevenDays.toFixed(2)}%` : "N/A"}
      </td>
    </tr>
  );
};

export default Coin;
