const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
 }
  
 const addOneToOne = () => 1 + 1;
  
 let x = timeFuncRuntime(addOneToOne);
 console.log(x);
 

