  // Foydalanuvchilar uchun object
  const users = {
    admin: { name: "Admin", username: "admin", password: "admin123" },
    user: { name: "User", username: "user", password: "user123" }

  };

  // Elementlar
  const messageElement = document.querySelector('.message');
  const signUpButton = document.querySelector('.sign-up');
  const signInButton = document.querySelector('.sign-in');

  // SignUp uchun
  function signUp() {
      try {
          const name = prompt("Enter your name (at least 1 character):");
          if (!name || name.length < 1) {
              throw new Error("Name must be at least 1 character long.");
          }

          const username = prompt("Enter your username (at least 4 characters):");
          if (!username || username.length < 4) {
              throw new Error("Username must be at least 4 characters long.");
          }

          const password = prompt("Enter your password (at least 6 characters):");
          if (!password || password.length < 6) {
              throw new Error("Password must be at least 6 characters long.");
          }

          if (users[username]) {
              throw new Error("Username already exists. Please choose a different username.");
          }

          users[username] = { name, password };
          messageElement.textContent = "Registration successful!";
      } catch (error) {
          messageElement.textContent = `Ошибка: ${error.message}`;
      }
  }

  // Функция входа
  function signIn() {
      try {
          const username = prompt("Enter your username:");
          if (!username) {
              throw new Error("Username is required.");
          }

          const password = prompt("Enter your password:");
          if (!password) {
              throw new Error("Password is required.");
          }

          if (!users[username]
              || !users[username].password
          ) {
              throw new Error("Username or password is incorrect. If you don't have an account, please sign up.");

          }


          messageElement.textContent = `Welcome, ${users[username].name}!`;
      } catch (error) {
          messageElement.textContent = ` ${error.message}`;
      }
  }