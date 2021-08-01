import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <div className="flex flex-row">
      <div className="grid grid-cols-3 gap-4">
        <button className="bg-red-600 text-white px-3 py-2 rounded-md" onClick={subtract}>
          -
        </button>

        <div>
          <pre className="text-2xl">{count}</pre>
        </div>

        <button className="bg-green-600 text-white px-3 py-2 rounded-md" onClick={add}>
          +
        </button>
    </div>
    </div>
  );
}
