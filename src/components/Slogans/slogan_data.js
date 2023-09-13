const questions = [
    {
      question: "The appliance of science",
      options: [
        { image: "slogans/q12.jpg", correct: false },
        { image: "slogans/q3.jpg", correct: false },
        { image: "slogans/q10.jpg", correct: false },
        { image: "slogans/q2.jpg", correct: true} 
      ],
      fact:"Zanussi"
    },
    {
        question: "Because life's complicated enough",
        options: [
          { image: "slogans/q7.jpg", correct: true },
          { image: "slogans/q14.jpg", correct: false },
          { image: "slogans/q17.jpg", correct: false },
          { image: "slogans/q3.jpg", correct: false} 
        ],
        fact:"Abbey National"
      },
      {
        question: "Does she or doesn't she?",
        options: [
          { image: "slogans/q3.jpg", correct: false },
          { image: "slogans/q8.jpg", correct: true },
          { image: "slogans/q18.jpg", correct: false },
          { image: "slogans/q11.jpg", correct: false} 
        ],
        fact:"Clairol Hair Colouring"
      },
      {
        question: "It's the real thing",
        options: [
          { image: "slogans/q1.jpg", correct: false },
          { image: "slogans/q2.jpg", correct: false },
          { image: "slogans/q3.jpg", correct: false },
          { image: "slogans/q4.jpg", correct: true} 
        ],
        fact:"Coca Cola"
      },
      {
        question: "It's what your right arm's for",
        options: [
          { image: "slogans/q15.jpg", correct: false },
          { image: "slogans/q2.jpg", correct: false },
          { image: "slogans/q9.jpg", correct: true },
          { image: "slogans/q16.jpg", correct: false} 
        ],
        fact:"Courage Beer"
      },
      {
        question: "Put a tiger in your tank",
        options: [
          { image: "slogans/q3.jpg", correct: true },
          { image: "slogans/q6.jpg", correct: false },
          { image: "slogans/q9.jpg", correct: false },
          { image: "slogans/q12.jpg", correct: false} 
        ],
        fact:"ESSO gasoline"
      },
      {
        question: "For mash get smash",
        options: [
          { image: "slogans/q5..jpg", correct: true },
          { image: "slogans/q10.jpg", correct: false },
          { image: "slogans/q15.jpg", correct: false },
          { image: "slogans/q17.jpg", correct: false} 
        ],
        fact:"Smash Instant Potato"
      },
      {
        question: "They're grrrrreat!",
        options: [
          { image: "slogans/q17.jpg", correct: false },
          { image: "slogans/q10.jpg", correct: false },
          { image: "slogans/q11.jpg", correct: false },
          { image: "slogans/q1.jpg", correct: true} 
        ],
        fact:"Kelloggs Frosties"
      },
      {
        question: "The best a man can get",
        options: [
          { image: "slogans/q2.jpg", correct: false },
          { image: "slogans/q1.jpg", correct: false },
          { image: "slogans/q6.jpg", correct: true},
          { image: "slogans/q7.jpg", correct: false },
          
        ],
        fact:"Gillete"
      },
      {
        question: "It beats as it sweeps as it cleans",
        options: [
          { image: "slogans/q17.jpg", correct: false },
          { image: "slogans/q8.jpg", correct: false },
          { image: "slogans/q16.jpg", correct: true},
          { image: "slogans/q9.jpg", correct: false },
          
        ],
        fact:"Hoover Vacuum Cleaners"
      },
      {
        question: "For hands that do dishes",
        options: [
          { image: "slogans/q14.jpg", correct: true} ,
          { image: "slogans/q13.jpg", correct: false },
          { image: "slogans/q15.jpg", correct: false },
          { image: "slogans/q4.jpg", correct: false },
         
        ],
        fact:"Fairy Liquid"
      },
      {
        question: "Finger-lickin' good",
        options: [
          { image: "slogans/q4.jpg", correct: false },
          { image: "slogans/q8.jpg", correct: false },
          { image: "slogans/q16.jpg", correct: false },
          { image: "slogans/q12.jpg", correct: true} 
        ],
        fact:"Kentucky Fried Chicken’"
      },
      {
        question: "Because I'm worth it",
        options: [

          { image: "slogans/q17.jpg", correct: true},
          { image: "slogans/q1.jpg", correct: false },
          { image: "slogans/q7.jpg", correct: false },
          { image: "slogans/q10.jpg", correct: false },
          
        ],
        fact:"L’Oreal"
      },
      {
        question: "A Mars a day helps you work rest and play",
        options: [
          { image: "slogans/q9.jpg", correct: false },
          { image: "slogans/q11.jpg", correct: false },
          { image: "slogans/q13.jpg", correct: false },
          { image: "slogans/q18.jpg", correct: true} 
        ],
        fact:"Mars"
      },
      {
        question: "I liked it so much I bought the company",
        options: [
          { image: "slogans/q3.jpg", correct: false },
          { image: "slogans/q14.jpg", correct: false },
          { image: "slogans/q11.jpg", correct: true} ,
          { image: "slogans/q10.jpg", correct: false },
          
        ],
        fact:"Remington"
      },
      {
        question: "Let your fingers do the walking",
        options: [
          { image: "slogans/q9.jpg", correct: false },
          { image: "slogans/q13.jpg", correct: true} ,
          { image: "slogans/q4.jpg", correct: false },
          { image: "slogans/q3.jpg", correct: false },
         
        ],
        fact:"Yellow Pages"
      },
      {
        question: "Only the crumbliest, flakiest chocolate",
        options: [
          { image: "slogans/q15.jpg", correct: true} ,
          { image: "slogans/q1.jpg", correct: false },
          { image: "slogans/q2.jpg", correct: false },
          { image: "slogans/q14.jpg", correct: false },
          
        ],
        fact:"Cadbury’s Flak"
      },
      {
        question: "Snap crackle and pop",
        options: [
          { image: "slogans/q16.jpg", correct: false },
          { image: "slogans/q15.jpg", correct: false },
          { image: "slogans/q14.jpg", correct: false },
          { image: "slogans/q10.jpg", correct: true} 
        ],
        fact:"Rice Krispies"
      },
      
  ];

export default questions;