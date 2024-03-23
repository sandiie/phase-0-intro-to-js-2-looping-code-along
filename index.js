
function writeCards(names) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${"Guadalupe" ,"Ollie" , "Aki"[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
  }
  
  // countDown function
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  

  