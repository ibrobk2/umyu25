function checkGender() {
   const nameInput = document.getElementById("name").value;
   const result = document.getElementById("result");


   fetch(`https://api.genderize.io/?name=${nameInput}`)
      .then(response => response.json()).then(data => {
         const predictedGender = data.gender;
         const accuracy = data.probability;
         console.log(data);

         result.innerHTML = `The predicted gender for ${nameInput} is ${predictedGender} with an accuracy of ${accuracy * 100}%.`; 
         
      }).catch(error => {
        console.error('Error:', error);
        result.innerHTML = 'An error occurred while fetching data.';
        // ));
    })


   


}



const word = document.getElementById("name");

word.addEventListener("keyup", function(e) {

    if (e.key === "Enter") {
        checkGender();
    }
})





                                                                                                                                                                                                                    
      
