import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export function Counter() {
  const count = useSelector(selectCount);
  

  return (
    <div>
      <h1>{count.id}</h1>
      <h2>{count.Title}</h2>
    </div>
  );
}
