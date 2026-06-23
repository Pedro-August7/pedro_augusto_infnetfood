import { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen() {
  const { theme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/20053242/pexels-photo-20053242.jpeg' }}
          style={styles.avatar}
        />
        <Text style={[styles.name, { color: theme.text }]}>{user?.name}</Text>
        <Text style={[styles.email, { color: theme.textSecondary }]}>{user?.email}</Text>
      </View>

      <View style={styles.cards}>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardLabel, { color: theme.textSecondary }]}>Membro desde</Text>
          <Text style={[styles.cardValue, { color: theme.text }]}>Janeiro de 2026</Text>
        </View>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardLabel, { color: theme.textSecondary }]}>Total de pedidos</Text>
          <Text style={[styles.cardValue, { color: theme.text }]}>3</Text>
        </View>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardLabel, { color: theme.textSecondary }]}>Cidade</Text>
          <Text style={[styles.cardValue, { color: theme.text }]}>Itabirito, MG</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { alignItems: 'center', marginBottom: 28, marginTop: 12 },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 12 },
  name: { fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  email: { fontSize: 14 },
  cards: {},
  card: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
  },
  cardLabel: { fontSize: 14 },
  cardValue: { fontSize: 14, fontWeight: '600' },
  logoutBtn: {
    marginTop: 20,
    borderWidth: 1.5,
    borderColor: '#e63946',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
  },
  logoutText: { color: '#e63946', fontWeight: 'bold', fontSize: 15 },
});
