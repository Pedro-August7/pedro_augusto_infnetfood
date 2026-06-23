import { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export default function SettingsScreen() {
  const { theme, isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.text }]}>Configurações</Text>

      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <View>
          <Text style={[styles.label, { color: theme.text }]}>Tema escuro</Text>
          <Text style={[styles.sublabel, { color: theme.textSecondary }]}>
            {isDark ? 'Ativado' : 'Desativado'}
          </Text>
        </View>
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          trackColor={{ false: '#ddd', true: '#e63946' }}
          thumbColor="#ffffff"
        />
      </View>

      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <View>
          <Text style={[styles.label, { color: theme.text }]}>Notificações</Text>
          <Text style={[styles.sublabel, { color: theme.textSecondary }]}>
            Ativadas ao confirmar pedido
          </Text>
        </View>
        <Text style={{ fontSize: 18 }}>🔔</Text>
      </View>

      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <View>
          <Text style={[styles.label, { color: theme.text }]}>Versão</Text>
          <Text style={[styles.sublabel, { color: theme.textSecondary }]}>1.0.0</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
  },
  label: { fontSize: 15, fontWeight: '600', marginBottom: 2 },
  sublabel: { fontSize: 12 },
});
