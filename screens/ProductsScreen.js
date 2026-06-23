import { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { CartContext } from '../context/CartContext';
import { products } from '../data/mocks';

export default function ProductsScreen({ route, navigation }) {
  const { category } = route.params;
  const { theme } = useContext(ThemeContext);
  const { items } = useContext(CartContext);

  const list = products[category.id] || [];
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          cartCount > 0 ? (
            <TouchableOpacity
              style={styles.cartBanner}
              onPress={() => navigation.navigate('Carrinho')}
            >
              <Text style={styles.cartBannerText}>🛒 {cartCount} {cartCount === 1 ? 'item' : 'itens'} no carrinho — Ver</Text>
            </TouchableOpacity>
          ) : null
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: theme.card }]}
            onPress={() => navigation.navigate('Detalhe', { product: item })}
            activeOpacity={0.7}
          >
            <View style={styles.cardContent}>
              <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
              <Text style={[styles.desc, { color: theme.textSecondary }]} numberOfLines={2}>
                {item.description}
              </Text>
              <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  cartBanner: {
    backgroundColor: '#e63946',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  cartBannerText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  card: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardContent: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  desc: { fontSize: 13, lineHeight: 18, marginBottom: 8 },
  price: { fontSize: 15, color: '#e63946', fontWeight: 'bold' },
  arrow: { fontSize: 24, color: '#ccc', marginLeft: 8 },
});
