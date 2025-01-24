function search(){
    var search = document.getElementById("search").value;
    var result = document.getElementById("result");
    const dictionary = {
      computer: "A computer is a machine that can be instructed to carry out sequences of arithmetic or logical operations automatically via computer programming.",
      mouse: "A mouse is a small, hand-held device that is used to control the movement of the cursor on a computer screen.",
      keyboard: "A keyboard is a typewriter-style device which uses an arrangement of buttons or keys to act as a means of input or text entry to a computer.",
    };

    if(search=="" || search==null){
        result.innerHTML = "Please enter a word to search for its meaning.";
        result.style.color = "red";
     
    } 

    else if(!dictionary[search]) {
        result.innerHTML = "Sorry "+search+", is not found in this dictionary.";
        result.style.color = "red";
    }
    
    else {
      result.innerHTML = dictionary[search];
      result.style.color = "green";
    }
}