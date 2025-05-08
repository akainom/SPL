import React from 'react';

interface DisplayProps {
  value: string | null;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return <div className="display">{value || '0'}</div>;
};

export default Display;