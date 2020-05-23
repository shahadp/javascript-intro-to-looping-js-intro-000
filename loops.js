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
    }
    return s;
  }
