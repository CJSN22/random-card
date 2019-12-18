window.onload = () => {

    // Number Array
    
    let numberArray = ["A", 2 , 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"]
    
    // Suit Array
    
    let suitArray = ["&#9824", "&#9827", "&#9829", "&#9830"]
     
    // Empty Array
     
    let emptyArray = []
    
    emptyArray.push(numberArray[Math.floor(Math.random() * numberArray.length)]);
    emptyArray.push(suitArray[Math.floor(Math.random() * suitArray.length)]);
    
    console.log(emptyArray);
    
    // let topCard = document.querySelector("top-card");
    
    if (emptyArray[1] === "&#9824" || emptyArray[1] === "&#9827") {
        document.querySelector("#top").style.color ="#000000";
        document.querySelector("#bottom").style.color ="#000000";
    }
    
    document.querySelector("#top").innerHTML = emptyArray[1];
    document.querySelector("#card-body").innerHTML = emptyArray[0];
    document.querySelector("#bottom").innerHTML = emptyArray[1];

};

