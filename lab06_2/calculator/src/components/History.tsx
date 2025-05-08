import React from 'react';

interface HistoryProps {
  history: string[];
}

const History: React.FC<HistoryProps> = ({ history }) => {
  return (
    <div className="history">
      {history.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  );
};

export default History;