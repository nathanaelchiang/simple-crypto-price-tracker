import React, { useState, createContext } from "react";
import CoinTable from "./CoinTable";

/**
 * @constant {React.Context<string | undefined>} coinPassed
 * @description React context to store the search term for filtering cryptocurrencies.
 */
const coinPassed = createContext<string | undefined>(undefined);

/**
 * @function CoinSearch
 * @description Component that provides a search bar to filter cryptocurrencies by name or symbol.
 * @returns {JSX.Element} The search bar component.
 */
const CoinSearch: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <h1 className="mb-2 mt-4 text-3xl font-extrabold text-black dark:text-white">
        Search for a Coin:
      </h1>
      <form>
        <input
          className="mb-6 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={search}
        />
      </form>
      <coinPassed.Provider value={search}>
        <CoinTable />
      </coinPassed.Provider>
    </>
  );
};

export default CoinSearch;
export { coinPassed };
