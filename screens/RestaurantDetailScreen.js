import { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

export default function RestaurantDetailScreen({ route }) {
  const { restaurant } = route.params;
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={{ uri: restaurant.menuItem.image }} style={styles.headerImage} />

      <View style={styles.content}>
        <Text style={[styles.name, { color: theme.text }]}>{restaurant.name}</Text>
        <Text style={[styles.address, { color: theme.textSecondary }]}>📍 {restaurant.address}</Text>
        <Text style={styles.rating}>⭐ {restaurant.rating} — Excelente</Text>

        <View style={[styles.divider, { borderColor: theme.border }]} />

        <Text style={[styles.menuTitle, { color: theme.text }]}>Exemplo do Cardápio</Text>

        <View style={[styles.menuCard, { backgroundColor: theme.card }]}>
          <Image source={{ uri: restaurant.menuItem.image }} style={styles.menuImage} />
          <View style={styles.menuInfo}>
            <Text style={[styles.menuName, { color: theme.text }]}>{restaurant.menuItem.name}</Text>
            <Text style={styles.menuPrice}>R$ {restaurant.menuItem.price.toFixed(2)}</Text>
          </View>
        </View>

        <View style={[styles.infoCard, { backgroundColor: theme.card }]}>
          <Text style={[styles.infoLabel, { color: theme.textSecondary }]}>Horário de funcionamento</Text>
          <Text style={[styles.infoValue, { color: theme.text }]}>Seg – Sex: 11h às 22h</Text>
        </View>
        <View style={[styles.infoCard, { backgroundColor: theme.card }]}>
          <Text style={[styles.infoLabel, { color: theme.textSecondary }]}>Tempo de entrega estimado</Text>
          <Text style={[styles.infoValue, { color: theme.text }]}>30 – 45 minutos</Text>
        </View>
        <View style={[styles.infoCard, { backgroundColor: theme.card }]}>
          <Text style={[styles.infoLabel, { color: theme.textSecondary }]}>Taxa de entrega</Text>
          <Text style={[styles.infoValue, { color: theme.text }]}>R$ 5,00</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerImage: { width: '100%', height: 200, resizeMode: 'cover' },
  content: { padding: 20 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 6 },
  address: { fontSize: 14, marginBottom: 4 },
  rating: { fontSize: 14, marginBottom: 20 },
  divider: { borderTopWidth: 1, marginBottom: 20 },
  menuTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 12 },
  menuCard: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 1,
  },
  menuImage: { width: 110, height: 85 },
  menuInfo: { flex: 1, padding: 14, justifyContent: 'center' },
  menuName: { fontSize: 15, fontWeight: '600', marginBottom: 6 },
  menuPrice: { fontSize: 15, color: '#e63946', fontWeight: 'bold' },
  infoCard: {
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    elevation: 1,
  },
  infoLabel: { fontSize: 12, marginBottom: 4 },
  infoValue: { fontSize: 14, fontWeight: '600' },
});
