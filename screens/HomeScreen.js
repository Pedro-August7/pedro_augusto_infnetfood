import { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import { categories } from '../data/mocks';

export default function HomeScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.greeting, { color: theme.textSecondary }]}>
        Olá, {user?.name?.split(' ')[0]} 👋
      </Text>
      <Text style={[styles.header, { color: theme.text }]}>O que você quer pedir?</Text>

      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: theme.card }]}
            onPress={() => navigation.navigate('Produtos', { category: item })}
            activeOpacity={0.7}
          >
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  greeting: { fontSize: 14, marginBottom: 4 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  row: { justifyContent: 'space-between', marginBottom: 12 },
  card: {
    flex: 0.48,
    borderRadius: 10,
    padding: 28,
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: { fontSize: 42, marginBottom: 10 },
  name: { fontSize: 15, fontWeight: '600' },
});
