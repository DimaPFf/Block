 function rotate(block) {
   const arr = block.form.concat([])
   const newForm = arr.reverse().map( el => el.concat([]).reverse())
   return {...block, form: newForm}
 }
 
 function getKeyleft(block) {
   const key = []
   for (const el of block.form) {
      if (el.includes(0)){
         key.push( el.map( item => item ? 0 : 1).join(''))
      } else {
         return key.join('')
      }
   }
   return key.join('')
 }

 function getKeyRight(block) {
   const key = []
   for (let i = block.form.length - 1; i > 0; i--) {
      if (block.form[i].includes(0)){
         key.push( block.form[i].join(''))
      } else {
         return key.reverse().join('')
      }
   }
   return key.reverse().join('')
 }
 
 function isEqual(key1, key2) {
   return key1 === key2
 }
 
 function compare(block1, block2) {
   const keys1 = getKeyleft(block1);
   const keys2 = getKeyRight(block2);

   if (isEqual(keys1, keys2)){
      return {is: true, rotate: false}
   }

   if (isEqual(keys1, getKeyRight(rotate(block2)) )){
      return {is: true, rotate: true}
   }

   return {is: false, rotate: false}

 }

 function layout(blocks) {
   const result = [blocks[0]];
   const stack = [ ...blocks.slice(1)]
   while(stack.length){
      const currentBlock = stack.shift()
      const data = compare(result[result.length-1], currentBlock)
      if (data.is){
         const block = data.rotate ? rotate(currentBlock) : currentBlock
         result.push({...block, rotate: data.rotate})
      } else {
         stack.push(currentBlock)
      }
   }

   return result.map( (block, i) => ({id: block.id, position: i+1, isRotate: Boolean(block.rotate)}))
 }

 const blocks = [
   {
     "id": 738,
     "form": [
       [1, 0],
       [1, 1]
     ]
   },
   {
     "id": 841,
     "form": [
       [1, 1],
       [0, 1],
       
     ]
   }
 ];


 const blocks2 = [{
   "id": 443,
   "form": [
      [1, 0, 1],
     [1, 1, 1]
   ]
 },
 {
   "id": 327,
   "form": [
     [0, 1, 0],
     [1, 1, 1],
     [1, 1, 1],
     [1, 1, 0],
     [0, 1, 0] //101100
   ]
 },
 {
   "id": 891,
   "form": [
     [0, 0, 1],
     [1, 0, 1],
     [1, 1, 1]
   ]
}];


const blocks3 = [{
   "id": 4892,
   "form": [
     [0, 0, 1],
     [1, 0, 1],
     [1, 1, 1],
     [1, 1, 1],
     [1, 1, 1],
     [1, 1, 1],
     [1, 1, 1],
     [1, 1, 1]
   ]
 },
 {
   "id": 1839,
   "form": [
     [1, 1, 1],
     [1, 1, 1],
     [1, 1, 1],
     [1, 1, 1],
     [1, 0, 0]
   ]
 },
 {
   "id": 8183,
   "form": [
     [0, 1, 1],
     [1, 1, 1],
     [1, 1, 1],
     [1, 1, 0],
     [0, 1, 0]
   ]
}];


console.log(layout(blocks3))