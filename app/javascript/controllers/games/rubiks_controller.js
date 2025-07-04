import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    computersPattern = [];
    usersPattern = [];

    connect() {
        console.log("hello world");
        // this is javascript using stimulus js. you use html elements to connect to it!
        // 'connect' triggers whenever a html element with '<div data-controller="games--rubiks">' enters the page
    }

    play() {
        
        this.computersPattern = [];
        console.log("play!");

        for (let i = 0; i < 4; i++) {
            this.computersPattern.push (Math.floor(Math.random() * 9) + 1); 
        }
        console.log(this.computersPattern);

        
        this.computersPattern.forEach((num, i) => {
            setTimeout (() => { 
                console.log("flashing:"+ num)
                let element = document.getElementById(num)
                let beforeFlash = element.style.background
                element.style.background = "#000";
                setTimeout (() => {
                    element.style.background = beforeFlash; 
                }, 500);
            },i * 800);

        });

        

       

        // here, we want to make the computer pick some random numbers from 1 to 9 and save it in an array

        // once we've picked them, we should pick an element with the id for the right number and make them flash somehow
        // for now, lets set the one we're flashing to a black background?
        //
        // pseudo-code:
        // random.numbers.each (number) {
        //     set background colour for cube(number) to black
        //     wait some seconds
        //     set it back
        // }
        //
        //
        // that should show the user which ones to click!
    }

    cubeClicked(event){
        console.log("cube " + event.target.id + " clicked");

        if (!this.usersPattern) {
            this.usersPattern = [];
        }

        let clicked = parseInt(event.target.id)
        this.usersPattern.push (event.target.id); 

        let currentIndex = this.usersPattern.length - 1 

        if (clicked =this.computersPattern[currentIndex]) {
            console.log(this.usersPattern) 

            if (this.usersPattern.length == this.computersPattern.length) {
                console.log("Correct!")
            } 
        }
        else {
           console.log("Wrong, try again!")
        }

  
        //store which button was clicked into the array 
        // check if userspattern matches computer pattern 


        // lets find the number of the one they just clicked and save it in the users pattern picked
        // if they've done the same amount of numbers as the computer, thats it! attempts done
    }
}
