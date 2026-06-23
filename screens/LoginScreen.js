import { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  function handleLogin() {
    setError('');
    const result = login(email, password);
    if (!result.success) {
      setError(result.error);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.logo}>🍔</Text>
        <Text style={styles.title}>InfnetFood</Text>
        <Text style={styles.subtitle}>Peça sua refeição favorita</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {error !== '' && <Text style={styles.error}>{error}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#f5f5f5' },
  container: { flex: 1, justifyContent: 'center', padding: 28 },
  logo: { fontSize: 52, textAlign: 'center', marginBottom: 8 },
  title: { fontSize: 30, fontWeight: 'bold', color: '#e63946', textAlign: 'center', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#888', textAlign: 'center', marginBottom: 36 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
    fontSize: 15,
    color: '#1a1a1a',
  },
  error: { color: '#e63946', textAlign: 'center', marginBottom: 10, fontSize: 13 },
  button: {
    backgroundColor: '#e63946',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  hint: { textAlign: 'center', color: '#aaa', fontSize: 12, marginTop: 20 },
});
