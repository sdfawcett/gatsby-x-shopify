import React, { useState } from 'react';
import 
{ 
   Tab,
   ButtonGroup
} 
from './styles'

const types = ['Product Details', 'Returns & Exchanges'];

export default function ProductTabs() {
   const [active, setActive] = useState(types[0]);
  return (
   <>
      <ButtonGroup>
      {types.map(type => (
         <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
         >
            {type}
         </Tab>
      ))}
      </ButtonGroup>
      <p />
      <p> Your payment selection: {active} </p>
   </>
  );
}