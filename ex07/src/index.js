var sum = 0;

function addThree ()  {

   sum = sum + 3;

  }


function addFive ()  {

  sum = sum + 5;

}
console.log(addThree());
console.log(addFive());

module.exports = {

 addThree,
 addFive

};