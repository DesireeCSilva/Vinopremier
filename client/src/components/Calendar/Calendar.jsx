import React from 'react'
import Calendar from 'react-calendar'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';




let ValuePiece = null;

let Value = ValuePiece || [ValuePiece, ValuePiece];

function MyApp() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
