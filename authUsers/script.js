class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
      this.loggedIn = false;
    }
  
    login(password) {
      if (password === this.password) {
        this.loggedIn = true;
        alert(`User ${this.username} logged in successfully.`);
      } else {
        alert('Incorrect password. Please try again.');
      }
    }
  
    logout() {
      this.loggedIn = false;
      alert(`User ${this.username} logged out.`);
    }
  }
  
  class Authentication {
    constructor() {
      this.users = {};
    }
  
    registerUser(username, password) {
      if (this.users[username]) {
        alert('Username already exists. Please choose another one.');
      } else {
        this.users[username] = new User(username, password);
        alert(`User ${username} registered successfully.`);
      }
    }
  
    login(username, password) {
      const user = this.users[username];
      if (user) {
        user.login(password);
      } else {
        alert('User not found.');
      }
    }
  
    logout(username) {
      const user = this.users[username];
      if (user) {
        user.logout();
      } else {
        alert('User not found.');
      }
    }
  }
  

  const authentication = new Authentication();
  
  authentication.registerUser('user1', 'password123');
  authentication.login('user1', 'password123');
  

  authentication.login('user1', 'password456');
  authentication.logout('user1');
  