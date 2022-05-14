export default function Currencies() {
  const currencies = [
    { name: "Bitcoin", symbol: "BTCUSD" },
    { name: "Litecoin", symbol: "LTCUSD" },
    { name: "Ethereum", symbol: "ETHUSD" },
    { name: "Zcash", symbol: "ZECUSD" },
    { name: "Bitcoin Cash", symbol: "BCHUSD" },
  ];

  return (
    <div className="currencies">
      {currencies.map((coin) => {
        const { name, symbol } = coin;

        return (
          <Link to={`/price/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
