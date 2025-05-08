import React, { useState, useEffect } from "react";
import Button from "./Button";
import Display from "./Display";
import History from "./History";
import { safeEvaluation } from "../utils/safeEvaluation";

const buttons = [
  "1", "2", "3", "+",
  "4", "5", "6", "-",
  "7", "8", "9", "*",
  "0", "C", "/", "⌫", 
  ".", "="
];

export const Calculator = () => {
  const [display, setDisplay] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "=") calculate();
    else if (e.key === "Backspace") deleteLastChar();
    else if (buttons.includes(e.key)) updateDisplay(e.key);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [display, history]);

  const calculate = () => {
    if (!display) return;

    const result = safeEvaluation(display);
    if (result === undefined) return;

    if (result === Infinity) {
      alert("Деление на ноль!");
      setHistory([...history, `${display} = Error`]);
    } else {
      setDisplay(String(result));
      setHistory([...history, `${display} = ${result}`]);
    }
  };

  const clearDisplay = () => setDisplay(null);

  const updateDisplay = (value: string) => {
    setDisplay((prev) => (prev ? prev + value : value));
  };

  const deleteLastChar = () => {
    setDisplay((prev) => (prev ? prev.slice(0, -1) : null));
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <Display value={display} />
        <div className="buttons-grid">
          {buttons.map((btn) => (
            <Button
              key={btn}
              title={btn}
              onClick={() => {
                if (btn === "C") clearDisplay();
                else if (btn === "=") calculate();
                else if (btn === "⌫") deleteLastChar();
                else updateDisplay(btn);
              }}
            />
          ))}
        </div>
      </div>
      <History history={history} />
    </div>
  );
};