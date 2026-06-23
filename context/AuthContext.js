import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(email, password) {
    if (email.trim() === '' || password.trim() === '') {
      return { success: false, error: 'Preencha todos os campos.' };
    }
    if (email.length < 5 || !email.includes('@')) {
      return { success: false, error: 'E-mail inválido.' };
    }
    if (password.length < 4) {
      return { success: false, error: 'Senha muito curta.' };
    }
    setUser({ name: 'Pedro Augusto', email });
    return { success: true };
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
