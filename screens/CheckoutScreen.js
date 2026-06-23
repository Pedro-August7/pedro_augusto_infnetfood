import { useState, useContext } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  ScrollView, ActivityIndicator, Alert,
} from 'react-native';
import * as Notifications from 'expo-notifications';
import { ThemeContext } from '../context/ThemeContext';
import { CartContext } from '../context/CartContext';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const paymentMethods = ['Cartão de Crédito', 'Cartão de Débito', 'Pix', 'Dinheiro'];

export default function CheckoutScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);
  const { items, total, clearCart } = useContext(CartContext);
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('Cartão de Crédito');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleCepChange(text) {
    setCep(text);
    const clean = text.replace(/\D/g, '');
    if (clean.length === 8) {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`https://viacep.com.br/ws/${clean}/json/`);
        const data = await res.json();
        if (data.erro) {
          setError('CEP não encontrado.');
          setAddress('');
        } else {
          setAddress(`${data.logradouro}, ${data.bairro} — ${data.localidade}/${data.uf}`);
        }
      } catch (e) {
        setError('Erro ao buscar o CEP.');
      } finally {
        setLoading(false);
      }
    } else {
      setAddress('');
    }
  }

  async function handleConfirm() {
    if (address.trim() === '') {
      setError('Informe um CEP válido para buscar o endereço.');
      return;
    }

    const { status } = await Notifications.requestPermissionsAsync();
    if (status === 'granted') {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'InfnetFood 🍔',
          body: 'Pedido confirmado! Está sendo preparado.',
        },
        trigger: { seconds: 3 },
      });
    }

    clearCart();
    Alert.alert(
      'Pedido realizado!',
      'Seu pedido foi confirmado e está sendo preparado.',
      [{ text: 'OK', onPress: () => navigation.navigate('Categorias') }]
    );
  }

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={[styles.section, { color: theme.text }]}>Endereço de entrega</Text>

      <TextInput
        style={[styles.input, { backgroundColor: theme.card, color: theme.text, borderColor: theme.border }]}
        placeholder="Digite o CEP"
        placeholderTextColor={theme.textSecondary}
        value={cep}
        onChangeText={handleCepChange}
        keyboardType="numeric"
        maxLength={9}
      />

      {loading && <ActivityIndicator color="#e63946" style={{ marginBottom: 12 }} />}

      {address !== '' && (
        <View style={[styles.addressBox, { backgroundColor: theme.card, borderColor: '#e63946' }]}>
          <Text style={[styles.addressText, { color: theme.text }]}>📍 {address}</Text>
        </View>
      )}

      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <Text style={[styles.section, { color: theme.text }]}>Forma de pagamento</Text>

      {paymentMethods.map(method => (
        <TouchableOpacity
          key={method}
          style={[
            styles.payOption,
            {
              backgroundColor: theme.card,
              borderColor: payment === method ? '#e63946' : theme.border,
            },
          ]}
          onPress={() => setPayment(method)}
        >
          <Text style={[styles.payText, { color: theme.text }]}>
            {payment === method ? '● ' : '○ '}{method}
          </Text>
        </TouchableOpacity>
      ))}

      <View style={[styles.summary, { backgroundColor: theme.card }]}>
        <Text style={[styles.summaryLabel, { color: theme.textSecondary }]}>
          {items.length} {items.length === 1 ? 'item' : 'itens'}
        </Text>
        <Text style={[styles.summaryTotal, { color: theme.text }]}>
          Total: R$ {total.toFixed(2)}
        </Text>
      </View>

      <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
        <Text style={styles.confirmText}>Confirmar Pedido</Text>
      </TouchableOpacity>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  section: { fontSize: 16, fontWeight: 'bold', marginBottom: 12, marginTop: 8 },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
    fontSize: 15,
  },
  addressBox: {
    borderWidth: 1.5,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  addressText: { fontSize: 14, lineHeight: 20 },
  error: { color: '#e63946', marginBottom: 12, fontSize: 13 },
  payOption: {
    borderWidth: 1.5,
    borderRadius: 8,
    padding: 14,
    marginBottom: 8,
  },
  payText: { fontSize: 14 },
  summary: {
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
  },
  summaryLabel: { fontSize: 13, marginBottom: 4 },
  summaryTotal: { fontSize: 18, fontWeight: 'bold' },
  confirmBtn: {
    backgroundColor: '#e63946',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  confirmText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});
