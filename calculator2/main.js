const input1 =document.querySelector('.input1');
   const input2 =document.querySelector('.input2');
   const input3 =document.querySelector('.input3');

   const minus =document.querySelector('.minus');
   const plus =document.querySelector('.plus');
   const proiz =document.querySelector('.proiz');
   const del =document.querySelector('.del');

   const result =document.querySelector('.btn');
   
   let input2Namber = Number(input2.value );
   let input1Namber = Number(input1.value );
   plus.onclick = () => {
      result.onclick = ()=> {input3.value = input1Namber + input2Namber}
  };
 minus.onclick = () => {
      result.onclick = ()=> {input3.value = input1Namber - input2Namber}
  };
 proiz.onclick = () => {
      result.onclick = ()=> {input3.value = input1Namber * input2Namber}
  };
 del.onclick = () => {
      result.onclick = ()=> {input3.value = input1Namber / input2Namber}
  };