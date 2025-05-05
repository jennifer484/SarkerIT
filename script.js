document.getElementById('login-link').addEventListener('click', function() {
  document.getElementById('login-form-container').style.display = 'block';
});

document.getElementById('logout-link').addEventListener('click', function() {
  alert("Logged out!");
  document.getElementById('login-link').style.display = 'inline';
  document.getElementById('logout-link').style.display = 'none';
});

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password123') {
    alert('Login successful!');
    document.getElementById('login-form-container').style.display = 'none';
    document.getElementById('login-link').style.display = 'none';
    document.getElementById('logout-link').style.display = 'inline';
  } else {
    alert('Incorrect credentials. Try admin / password123.');
  }
});
