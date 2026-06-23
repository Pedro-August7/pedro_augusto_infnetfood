import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { AuthProvider, AuthContext } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import MapScreen from './screens/MapScreen';
import RestaurantDetailScreen from './screens/RestaurantDetailScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categorias" component={HomeScreen} options={{ title: 'InfnetFood' }} />
      <Stack.Screen name="Produtos" component={ProductsScreen} options={({ route }) => ({ title: route.params.category.name })} />
      <Stack.Screen name="Detalhe" component={ProductDetailScreen} options={{ title: 'Detalhes' }} />
      <Stack.Screen name="Carrinho" component={CartScreen} options={{ title: 'Carrinho' }} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Finalizar Pedido' }} />
    </Stack.Navigator>
  );
}

function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mapa" component={MapScreen} options={{ title: 'Restaurantes' }} />
      <Stack.Screen name="Restaurante" component={RestaurantDetailScreen} options={({ route }) => ({ title: route.params.restaurant.name })} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.card },
        tabBarActiveTintColor: '#e63946',
        tabBarInactiveTintColor: theme.textSecondary,
        tabBarLabelStyle: { fontSize: 11 },
      }}
    >
      <Tab.Screen
        name="Início"
        component={HomeStack}
        options={{ tabBarIcon: () => <Text style={{ fontSize: 18 }}>🏠</Text> }}
      />
      <Tab.Screen
        name="Pedidos"
        component={OrdersScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: theme.card },
          headerTintColor: theme.text,
          tabBarIcon: () => <Text style={{ fontSize: 18 }}>📋</Text>,
        }}
      />
      <Tab.Screen
        name="MapaTab"
        component={MapStack}
        options={{
          title: 'Mapa',
          tabBarIcon: () => <Text style={{ fontSize: 18 }}>🗺️</Text>,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: theme.card },
          headerTintColor: theme.text,
          tabBarIcon: () => <Text style={{ fontSize: 18 }}>👤</Text>,
        }}
      />
      <Tab.Screen
        name="Config"
        component={SettingsScreen}
        options={{
          headerShown: true,
          title: 'Configurações',
          headerStyle: { backgroundColor: theme.card },
          headerTintColor: theme.text,
          tabBarIcon: () => <Text style={{ fontSize: 18 }}>⚙️</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Main" component={MainTabs} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
