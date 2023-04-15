const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const response = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
      localStorage.setItem('token', data.token);
    } else {
      console.log('err');
    }

  };
  
  export const register = async (name, email, password) => {
    const response = await fetch(`${baseUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
    } else {
      throw new Error(data.message);
    }
  };
  
  export const logout = () => {
    localStorage.removeItem('token');
  };
  
  export const isLoggedIn = () => {
    return !!localStorage.getItem('token');
  };
  