let firstname = document.querySelector('#name')
let lastname = document.querySelector('#name2')
let gmail = document.querySelector('#gmail')
let passw = document.querySelector('#password')
let passw2 = document.querySelector('#password2')

function passWord() {
    let passp = document.querySelector('#passp')
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$_/.#@,+])[a-zA-Z0-9$_/.#@,+]{8,20}$/
    
    if (!passwordRegex.test(passw.value)) {
        passp.innerHTML = 'Not a strong password'
        passp.style.display = 'block'
    } else {
        passp.style.display = 'none'
    }
}

function passWord2() {
    let passp = document.querySelector('#passp')
    let passw = document.querySelector('#password')
    let passw2 = document.querySelector('#password2')
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$_/.#@,+])[a-zA-Z0-9$_/.#@,+]{8,20}$/
    
    if (!passwordRegex.test(passw.value)) {
        passp.innerHTML = 'Not a strong password'
        passp.style.display = 'block'
    } else if (passw2.value !== passw.value) {
        passp.innerHTML = 'Passwords do not match'
        passp.style.display = 'block'
    } else {
        passp.style.display = 'none'
    }
}

function check() {
    let passw = document.querySelector('#password')
    if (passw.type === 'password' || passw2.type === 'password') {
        passw.type = 'text'
    } else {
        passw.type = 'password'
    }
}

function check2() {
    let passw2 = document.querySelector('#password2')
    if (passw2.type === 'password') {
        passw2.type = 'text'
    } else {
        passw2.type = 'password'
    }
}


function firstName() {
    let namep = document.querySelector('#namep')
    let nameregex = /^[a-zA-Z ,.'-]{3,}$/
    
    if (!nameregex.test(firstname.value)) {
        namep.innerHTML = 'Not a real name'
        namep.style.display = 'block'
    } else {
        namep.style.display = 'none'
    }
}

function lastName() {
    let name2p = document.querySelector('#name2p')
    let nameregex = /^[a-zA-Z ,.'-]{3,}$/
    
    if (!nameregex.test(lastname.value)) {
        name2p.innerHTML = 'Not a real name'
        name2p.style.display = 'block'
    } else {
        name2p.style.display = 'none'
    }
}

function gMail() {
    let gmailg = document.querySelector('#gmail').value
    let gmailp = document.querySelector('#gmailp') 
    let gmailregex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

    if (!gmailregex.test(gmailg)) {
        gmailp.innerHTML = 'Not a real gmail'
        gmailp.style.display = 'block'
    }else{
        gmailp.style.display = 'none'
    }
}

function urllink() {
    let url = document.getElementById('url')
    let urlp = document.getElementById('urlp')
    let urlregex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/

    if (!urlregex.test(url.value)) {
        urlp.innerHTML = 'Invalid url'
    } else {
        urlp.innerHTML = ''
    }
}

// function sign() {
//     let urlp = document.getElementById('urlp')
//     let gmailp = document.querySelector('#gmailp') 
//     let name2p = document.querySelector('#name2p')
//     let namep = document.querySelector('#namep')
//     let passp = document.querySelector('#passp')
//     let allinp = document.getElementsByTagName('input')

//     if (!urlp === '' || !gmailp === '' || !name2p === '' || !namep === '' || !passp === '' || allinp === '') {
//         alert('invalid form')
//     }
// }

function sign() {
  let allinp = document.querySelectorAll('input');

  for (let input of allinp) {
    if (input.value === '') {
      alert('invalid form');
      return;
    }
  }

  alert('Welcome to planet HC')
  window.location.href = 'hc.html'
}
