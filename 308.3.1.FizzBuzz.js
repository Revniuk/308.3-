for (let i = 1; i <= 100; i++)//check if the number is withing 1 to 100 interval AND loop through all numbers from 1 to 100 //
{
    if (i % 3 === 0 && i % 5 === 0)
  //check if the number is divisible both by 3 and by 5//
    {
    console.log('Fizz Buzz');
    } else if (i % 3 === 0)
    //check if the number is divisible by 3, a reminder is zero//
    {
    console.log('Fizz');
    } else if (i % 5 === 0)
    //check if the number is divisible by 5, a reminder is zero//
    {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
