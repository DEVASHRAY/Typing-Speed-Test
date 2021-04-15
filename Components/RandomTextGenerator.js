const TextsArr = [
  "Stay Hungry. Stay Foolish - Steve Jobs",
  "Good Artists Copy, Great Artists Steal - Pablo Picasso",
  "Argue with idiots, and you become an idiot - Paul Graham",
  "Be yourself; everyone else is already taken - Oscar Wilde",
  "Simplicity is the ultimate sophistication - Leonardo Da Vinci",
  "Stupidity, outrage, vanity, cruelty, iniquity, bad faith, falsehood - we fail to see the whole array when it is facing in the same direction we - Jean Rostand ",
  "Bringing solar as a renewable energy resource for those who are not able to install solar panels on their roofs allows more communities to benefit from a solar array - Jeff Van Drew",
  "The Internet has given us 10 or 15 new styles of communication: long messages like blogging, and then short messages like texting and tweeting. I see it all as part of an expanding array of linguistic possibilities - David Crystal",
  "You have a wide array of people that are watching something, and you cannot please everyone at the same time. Half the people will love it; half the people will hate it. Half the people won't see it - David A. R. White",
];

let textSpace = document.querySelector(".new-text");
var RandomizedText;
function RandomText() {
  const RandomIndex = Math.floor(Math.random() * TextsArr.length);
  RandomizedText = TextsArr[RandomIndex];
  textSpace.innerText = RandomizedText;
}

export { RandomText, RandomizedText };
