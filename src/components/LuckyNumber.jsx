import { useState } from "react";
import styles from "./LuckyNumber.module.css";

export function LuckyNumber() {
  const [luckyNumbers, setLuckyNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [message, setMessage] = useState("");

  function handleClick() {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setCurrentNumber(newNumber); 

    if (luckyNumbers.includes(newNumber)) {
      setMessage(`O número ${newNumber} já foi sorteado! 😢`);
    } else {
      setLuckyNumbers([...luckyNumbers, newNumber]);
      setMessage(`O número ${newNumber} foi sorteado com sucesso! 🎉`);
    }
  }

  return (
    <div className={styles.container}>
      <h1>
        Número Sorteado{currentNumber !== null ? ` = ${currentNumber}` : " 🎲"}
      </h1>

      <button className={styles.button} onClick={handleClick}>
        Clique para sortear!
      </button>

      {message && <p className={styles.message}>{message}</p>}

      <div className={styles.result}>
        <h2>Números sorteados:</h2>
        <div className={styles.resultList}>
  {luckyNumbers.length > 0 ? (
    luckyNumbers.map((num, index) => (
      <div key={index} className={styles.numberBox}>
        {num}
      </div>
    ))
  ) : (
    <p>Nenhum número ainda.</p>
  )}
</div>
      </div>
    </div>
  );
}