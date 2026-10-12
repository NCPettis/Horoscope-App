document.querySelector('#button').addEventListener('click', horoscope)

function horoscope(){
    let dob = document.querySelector('#bday').value

    let computation = document.querySelector('#showHere').innerText= dob
    const month = computation.split('-')[1]
    const day = computation.split('-')[2]

    // console.log(month, day)

    if((month == 3 && day >= 21) || (month == 4 && day <= 19)){
        document.querySelector('#horoscope').innerText = "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently."

    }
    else if((month == 4 && day >= 20) || (month == 5 && day <= 20)){
        document.querySelector('#horoscope').innerText = "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style."

    }
    else if((month == 5 && day >= 21) || (month == 6 && day <= 20)){
        document.querySelector('#horoscope').innerText = "There is no greater agony than bearing an untold story inside you."

    }
     else if((month == 6 && day >= 21) || (month == 7 && day <= 22)){
        document.querySelector('#horoscope').innerText = "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."

    }
      else if((month == 7 && day >= 23) || (month == 8 && day <= 22)){
        document.querySelector('#horoscope').innerText = "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty."

    }
      else if((month == 8 && day >= 23) || (month == 9 && day <= 22)){
        document.querySelector('#horoscope').innerText = "What you're supposed to do when you don't like a thing is change it. If you can't change it, change the way you think about it. Don't complain."

    }
      else if((month == 9 && day >= 23) || (month == 10 && day <= 22)){
        document.querySelector('#horoscope').innerText = "The desire to reach for the stars is ambitious. The desire to reach hearts is wise."

    }
      else if((month == 10 && day >= 23) || (month == 11 && day <= 21)){
        document.querySelector('#horoscope').innerText = "I can be changed by what happens to me. But I refuse to be reduced by it."

    }
      else if((month == 11 && day >= 22) || (month == 12 && day <= 21)){
        document.querySelector('#horoscope').innerText = "I love to see a young girl go out and grab the world by the lapels. Life's a bitch. You've got to go out and kick ass."

    }
      else if((month == 12 && day >= 22) || (month == 1 && day <= 19)){
        document.querySelector('#horoscope').innerText = "I did then what I knew how to do. Now that I know better, I do better."

    }
      else if((month == 1 && day >= 20) || (month == 2 && day <= 18)){
        document.querySelector('#horoscope').innerText = "Music was my refuge. I could crawl into the space between the notes and curl my back to loneliness."

    }
      else if((month == 2 && day >= 19) || (month == 3 && day <= 20)){
        document.querySelector('#horoscope').innerText = "When someone shows you who they are believe them the first time."

    }

}

// Aries (Ram): March 21 – April 19
// Taurus (Bull): April 20 – May 20
// Gemini (Twins): May 21 – June 20 
// Cancer (Crab): June 21  – July 22
// Leo (Lion): July 23 – August 22
// Virgo (Virgin): August 23 – September 22
// Libra (Balance): September 23 – October 22
// Scorpio (Scorpion): October 22– November 21
// Sagittarius (Archer): November 22 – December 21
// Capricorn (Goat): December 22 – January 19
// Aquarius (Water Bearer): January 20 – February 18
// Pisces (Fish): February 19 – March 20