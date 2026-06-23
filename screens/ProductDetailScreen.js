import React, { useState, useContext, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { CartContext } from '../context/CartContext';

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;
  const { theme } = useContext(ThemeContext);
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const scale = useRef(new Animated.Value(1)).current;

  function handleAdd() {
    addItem(product, quantity);
    Animated.sequence([
      Animated.timing(scale, { toValue: 1.12, duration: 100, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start(() => {
      navigation.navigate('Carrinho');
    });
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={[styles.name, { color: theme.text }]}>{product.name}</Text>
        <Text style={[styles.desc, { color: theme.textSecondary }]}>{product.description}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>

        <Text style={[styles.qtyLabel, { color: theme.text }]}>Quantidade</Text>
        <View style={styles.qtyRow}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => setQuantity(q => Math.max(1, q - 1))}
          >
            <Text style={styles.qtyBtnText}>−</Text>
          </TouchableOpacity>
          <Text style={[styles.qty, { color: theme.text }]}>{quantity}</Text>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => setQuantity(q => q + 1)}
          >
            <Text style={styles.qtyBtnText}>+</Text>
          </TouchableOpacity>
        </View>

        <Animated.View style={{ transform: [{ scale }] }}>
          <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
            <Text style={styles.addBtnText}>
              Adicionar ao Carrinho — R$ {(product.price * quantity).toFixed(2)}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: '100%', height: 220, resizeMode: 'cover' },
  content: { padding: 20 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  desc: { fontSize: 14, lineHeight: 22, marginBottom: 16 },
  price: { fontSize: 22, color: '#e63946', fontWeight: 'bold', marginBottom: 24 },
  qtyLabel: { fontSize: 15, fontWeight: '600', marginBottom: 12 },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 28 },
  qtyBtn: {
    backgroundColor: '#e63946',
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyBtnText: { color: '#fff', fontSize: 22, fontWeight: 'bold', lineHeight: 26 },
  qty: { fontSize: 20, fontWeight: 'bold', marginHorizontal: 28 },
  addBtn: {
    backgroundColor: '#e63946',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  addBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});
