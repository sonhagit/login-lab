// async function login(){
//     let a = await fetch('https://dummyjson.com/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
          
//           username: 'kminchelle',
//           password: '0lelplR',
//           // expiresInMins: 60, // optional
//         })
//       })
//       .then(res => res.json())
//       .then(data => data);

//       console.log(a)
//       localStorage.setItem("usertoken", a.token);
      
// }
const ACCESS_TOKEN = 'accessToken';
window.onload = () => {
    let tokenAcc = window.localStorage.getItem(ACCESS_TOKEN);
    if (tokenAcc != undefined) {
        window.location.assign('login/login.html');
    }
}
const loginApi = async (username, password) => {
  return fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          username: username,
          password: password,
      })
  })
  .then(res => res.json());
}

const handleLogin = async () => {
  let user = document.getElementById('user').value;
  let passw = document.getElementById('passw').value;
  let test = await loginApi(user, passw);
  if (test.token != undefined) {
      window.localStorage.setItem(ACCESS_TOKEN, test.token);
      return window.location.assign('login/login.html');
  }
  alert('Account not found!');
}

const eyePassWord = document.getElementById('table-pass');
eyePassWord.style.cursor = 'pointer';

eyePassWord.addEventListener('click', () => {
  const PASS_WORD = 'password';
  let passwInput = document.getElementById('passw');
  let typeInput = passwInput.type;
  if (PASS_WORD.includes(typeInput)) {
      passwInput.type = 'text';
  } else {
      passwInput.type = PASS_WORD;
  }
})