const setOfWords =[
    "My name is mary navicher and i am a web devloper.",
    "Hope you are having fun this is a simple game you can make.", 
    "If you want to be a good devloper then you should start with HTML  CSS and javascript , if you have knowledge then you can devlope your know version of this website." , "hello there hope you doing good."
];
const msg = document.getElementById("msg");
const typedWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime , endTime;

const  playGame = ()=>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
       msg.innerText = setOfWords[randomNumber];  
       let date = new Date();
       startTime =date.getTime();
       btn.innerText = "Done";                             
}

const endplay = () =>{
    let date = new Date();
       endTime =date.getTime();
      let totalTime = ((endTime-startTime)/1000);  
      console.log(totalTime);  

      let totalStr = typedWords.value;
      let wordCount = wordCounter(totalStr)

      let speed = Math.round((wordCount / totalTime)* 60);

      let finalMsg = "You typed total at " +speed+ " words per minutes ";

      finalMsg += compareWords(msg.innerText , totalStr );
      msg.innerText = finalMsg;
}

 const compareWords = (str1 , str2 )=>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;

    words1.forEach(function(item , index ) {
        if(item == words2[index]){
            count++;
        }
        
    });

    let errorWords = (words1.length - count);
    return(count + " correct out of  " + words1.length + "   words and the total number of error words are "+ errorWords + ".");


 }
const wordCounter  = (str) =>{
    let response = str.split(" ").length;
    return response; 
}

btn.addEventListener("click", function(){
    if(this.innerText =="start"){
        typedWords.disabled = false;
        playGame();
    }
    else if( this.innerText == "Done"){
        typedWords.disabled = true;
        btn.innerText = "Start";
        endplay();
      

    }
})