import { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { CartContext } from '../context/CartContext';

export default function CartScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);
  const { items, removeItem, total } = useContext(CartContext);

  if (items.length === 0) {
    return (
      <View style={[styles.empty, { backgroundColor: theme.background }]}>
        <Text style={styles.emptyIcon}>🛒</Text>
        <Text style={[styles.emptyText, { color: theme.text }]}>Carrino vazio</Text>
        <Text style={[styles.emptyHint, { color: theme.textSecondary }]}>
          Adicione itens para continuar
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: theme.card }]}>
            <View style={styles.info}>
              <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
              <Text style={[styles.qty, { color: theme.textSecondary }]}>
                {item.quantity}x — R$ {item.price.toFixed(2)} cada
              </Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.subtotal}>
                R$ {(item.price * item.quantity).toFixed(2)}
              </Text>
              <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeBtn}>
                <Text style={styles.removeText}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={[styles.footer, { backgroundColor: theme.card, borderTopColor: theme.border }]}>
        <Text style={[styles.total, { color: theme.text }]}>Total: R$ {total.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.checkoutBtn}
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text style={styles.checkoutText}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  empty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyIcon: { fontSize: 52, marginBottom: 12 },
  emptyText: { fontSize: 18, fontWeight: 'bold', marginBottom: 6 },
  emptyHint: { fontSize: 14 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
    marginBottom: 0,
    borderRadius: 10,
    padding: 14,
    elevation: 1,
  },
  info: { flex: 1 },
  name: { fontSize: 15, fontWeight: '600', marginBottom: 4 },
  qty: { fontSize: 13 },
  right: { alignItems: 'flex-end' },
  subtotal: { fontSize: 15, color: '#e63946', fontWeight: 'bold', marginBottom: 6 },
  removeBtn: {},
  removeText: { fontSize: 12, color: '#999' },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    marginTop: 16,
  },
  total: { fontSize: 18, fontWeight: 'bold', marginBottom: 14 },
  checkoutBtn: {
    backgroundColor: '#e63946',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  checkoutText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});
