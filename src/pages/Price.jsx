import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Price() {
  const apiKey = "pk_f638507918de416286887219f2aa4cbd";
  const { symbol } = useParmas();
  const url = `https://cloud.iexapis.com/stable/crypto/${symbol}/price?token=${apiKey}`;

  const [coin, setCoin] = useState(null);

  const getCoin = async () => {
    const data = await fetch(url).then((res) => res.json());
    setCoin(data);
  };

  useEffect(() => {
    getCoin();
  }, []);

  return <h1>This is the price Component</h1>;
}
