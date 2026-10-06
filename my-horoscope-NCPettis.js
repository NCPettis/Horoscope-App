document.querySelector('#button').addEventListener('click', horoscope)

function horoscope(){
    let dob = document.querySelector('#bday').value

    let computation = document.querySelector('#showHere').innerText= dob
    const month = computation.split('-')[1]
    const day = computation.split('-')[2]

    // console.log(month, day)

    if((month == 3 && day >= 21) || (month == 4 && day <= 19)){
        document.querySelector('#horoscope').innerText = "You're Mean"

    }
    else if((month == 4 && day >= 20) || (month == 5 && day <= 20)){
        document.querySelector('#horoscope').innerText = "You're Slow"

    }
    else if((month == 5 && day >= 21) || (month == 6 && day <= 20)){
        document.querySelector('#horoscope').innerText = "You talk allotttttt"

    }
     else if((month == 6 && day >= 21) || (month == 7 && day <= 22)){
        document.querySelector('#horoscope').innerText = "You cry allotttttt"

    }
      else if((month == 7 && day >= 23) || (month == 8 && day <= 22)){
        document.querySelector('#horoscope').innerText = "You are a STARR"

    }
      else if((month == 8 && day >= 23) || (month == 9 && day <= 22)){
        document.querySelector('#horoscope').innerText = "You love to plan"

    }
      else if((month == 9 && day >= 23) || (month == 10 && day <= 22)){
        document.querySelector('#horoscope').innerText = "You love everyone"

    }
      else if((month == 10 && day >= 23) || (month == 11 && day <= 21)){
        document.querySelector('#horoscope').innerText = "Broody Batman Lover"

    }
      else if((month == 11 && day >= 22) || (month == 12 && day <= 21)){
        document.querySelector('#horoscope').innerText = "You love to PARTY"

    }
      else if((month == 12 && day >= 22) || (month == 1 && day <= 19)){
        document.querySelector('#horoscope').innerText = "You are evil"

    }
      else if((month == 1 && day >= 20) || (month == 2 && day <= 18)){
        document.querySelector('#horoscope').innerText = "You are weird"

    }
      else if((month == 2 && day >= 19) || (month == 3 && day <= 20)){
        document.querySelector('#horoscope').innerText = "You a Baddie you know you a 10"

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