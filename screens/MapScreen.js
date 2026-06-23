import { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { ThemeContext } from '../context/ThemeContext';
import { restaurants } from '../data/mocks';

const mapHtml = `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<style>*{margin:0;padding:0}#map{height:100vh;width:100vw}</style>
</head>
<body>
<div id="map"></div>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
var map = L.map('map').setView([-22.9068,-43.1729],15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19}).addTo(map);
var pts=[
  [-22.9068,-43.1729,'Lanchonete do Zé'],
  [-22.9035,-43.1765,'Pizzaria Roma'],
  [-22.9055,-43.1743,'Bistrô Central'],
  [-22.9080,-43.1700,'Tapiocaria Carioca'],
  [-22.9020,-43.1780,'Sushi Boa Vista'],
  [-22.9090,-43.1750,'Açaí da Praça'],
  [-22.9045,-43.1710,'Churrascaria do Porto'],
  [-22.9060,-43.1790,'Padaria Estrela'],
  [-22.9075,-43.1730,'Casa Árabe'],
  [-22.9030,-43.1760,'Burguer House']
];
pts.forEach(function(p){
  L.marker([p[0],p[1]]).addTo(map).bindPopup('<b>'+p[2]+'</b>');
});
</script>
</body>
</html>
`;

export default function MapScreen({ navigation }) {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <WebView source={{ html: mapHtml }} style={styles.map} />

      <FlatList
        data={restaurants}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text style={[styles.listHeader, { color: theme.text }]}>
            Restaurantes no Centro do Rio
          </Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: theme.card }]}
            onPress={() => navigation.navigate('Restaurante', { restaurant: item })}
            activeOpacity={0.7}
          >
            <View style={styles.info}>
              <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
              <Text style={[styles.address, { color: theme.textSecondary }]}>{item.address}</Text>
            </View>
            <View style={styles.right}>
              <Text style={styles.rating}>⭐ {item.rating}</Text>
              <Text style={[styles.arrow, { color: theme.textSecondary }]}>›</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { height: 220 },
  listHeader: { fontSize: 16, fontWeight: 'bold', padding: 16, paddingBottom: 8 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 10,
    padding: 14,
    elevation: 1,
  },
  info: { flex: 1 },
  name: { fontSize: 15, fontWeight: '600', marginBottom: 2 },
  address: { fontSize: 12 },
  right: { flexDirection: 'row', alignItems: 'center' },
  rating: { fontSize: 13, fontWeight: 'bold', marginRight: 6 },
  arrow: { fontSize: 20 },
});
