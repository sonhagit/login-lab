async function login(){
    let a = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: 'kminchelle',
          password: '0lelplR',
          // expiresInMins: 60, // optional
        })
      })
      .then(res => res.json())
      .then(data => data);

      console.log(a)
      localStorage.setItem("usertoken", a.token);
      
}