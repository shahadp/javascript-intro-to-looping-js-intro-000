function forLoop(array)
  {
    for (let i=0;i<25;i++)
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
    return array
  }

function whileLoop(n)
  {
    let s='not done'
    while (n>0)
    {
      s= (--n===0?'done':'not done')
      console.log(`${s} <=done counter=> ${n}`)
    }
    return s;
  }

function doWhileLoop(num)
{
  do{
    console.log("I run once regardless.")
  } while (num===0)
}

doWhileLoop(num)
         console logs "I run once regardless."
         1 time when passed an integer of 0 a
s a parameter.:
