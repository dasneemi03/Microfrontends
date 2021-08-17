import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
const ref = useRef(null);

useEffect( () => {
    mount(ref.current); //this just loads mount() once when the component first loads
});

return<div ref={ref}  />

}
