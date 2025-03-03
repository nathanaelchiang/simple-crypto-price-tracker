/* 
import { useRouter } from 'next/router';

const Coin = ({ 
    marketCapRank, 
    name, 
    image, 
    symbol, 
    price, 
    OneHr, 
    TwoFourHr, 
    SevenDays,
    id
}) => { 
    const router = useRouter()

    return (
        <tr className='shadow-sm' style={{cursor: 'pointer'}} key={id} onClick={() => router.push(`/ticker/${id}`)}>
            <td className="text-center">{marketCapRank}</td>
            <td className="text-center">
                <img src={image} alt={`${name} icon`} className="object-center object-contain h-10 w-10 mx-auto rounded-full" />
            </td>
            <td className="text-center font-bold">{name}</td>
            <td className="text-center">{symbol.toUpperCase()}</td>
            <td className="text-center font-bold">{price.toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 7})}</td>
            {
                (OneHr < 0) ?
                (<td className="text-center text-red-600">{OneHr?.toFixed(2)}%</td>) : 
                (<td className="text-center text-green-600">+{OneHr?.toFixed(2)}%</td>)
            }
            {
                (TwoFourHr < 0) ?
                (<td className="text-center text-red-600">{TwoFourHr?.toFixed(2)}%</td>) : 
                (<td className="text-center text-green-600">+{TwoFourHr?.toFixed(2)}%</td>)
            }
            {
                (SevenDays < 0) ?
                (<td className="text-center text-red-600">{SevenDays?.toFixed(2)}%</td>) : 
                (<td className="text-center text-green-600">+{SevenDays?.toFixed(2)}%</td>)
            }
        </tr>
    )
}

export default Coin;
 */ 