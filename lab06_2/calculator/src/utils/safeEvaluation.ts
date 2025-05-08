export const safeEvaluation = (expression: string) => {
    try {
      return new Function(`'use strict'; return (${expression})`)();
    } catch (error) {
      alert(`Ошибка: ${error}`);
      return null;
    }
  };