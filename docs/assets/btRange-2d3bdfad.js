import{P as e,r as g,u as s,j as a}from"./index-c2e0587a.js";function d({onlyInput:b=!1,disabled:t,inputValue:n,stepValue:i,minValue:m,maxValue:o,inputId:r,inputName:u,label:c,handleChange:p}){g.useEffect(()=>{const f=document.getElementById(r);!t&&s.isNumber(n)&&(f.value=n)},[]);const l=a.jsx("input",{type:"range",className:"form-range",min:s.isNumber(m)?m:0,max:s.isNumber(o)?o:100,step:s.isNumber(i)?i:1,id:r,name:s.isAttrKey(u)?u:r,onChange:p,disabled:t,value:n});return b?l:a.jsxs("div",{className:"vol-box",children:[a.jsx("label",{htmlFor:r,className:"form-label",children:c}),l]})}d.propTypes={onlyInput:e.bool,disabled:e.bool.isRequired,inputValue:e.number.isRequired,stepValue:e.number,minValue:e.number,maxValue:e.number,inputId:e.string.isRequired,inputName:e.string,label:e.string,handleChange:e.func.isRequired};export{d as B};