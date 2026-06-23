import { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { mockOrders } from '../data/mocks';

export default function OrdersScreen() {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={mockOrders}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text style={[styles.header, { color: theme.text }]}>Meus Pedidos</Text>
        }
        ListEmptyComponent={
          <Text style={[styles.empty, { color: theme.textSecondary }]}>Nenhum pedido ainda.</Text>
        }
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: theme.card }]}>
            <View style={styles.topRow}>
              <Text style={[styles.date, { color: theme.textSecondary }]}>{item.date}</Text>
              <Text style={[
                styles.status,
                { color: item.status === 'Entregue' ? '#22c55e' : '#f59e0b' }
              ]}>
                {item.status}
              </Text>
            </View>
            <View style={styles.divider} />
            {item.items.map((i, idx) => (
              <Text key={idx} style={[styles.item, { color: theme.text }]}>• {i}</Text>
            ))}
            <Text style={styles.total}>Total: R$ {item.total.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  empty: { textAlign: 'center', marginTop: 40, fontSize: 15 },
  card: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  date: { fontSize: 13 },
  status: { fontSize: 13, fontWeight: '600' },
  divider: { height: 1, backgroundColor: '#eee', marginBottom: 10 },
  item: { fontSize: 14, marginBottom: 4 },
  total: { fontSize: 15, color: '#e63946', fontWeight: 'bold', marginTop: 8 },
});
