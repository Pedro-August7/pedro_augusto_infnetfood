export const categories = [
  { id: '1', name: 'Lanches', icon: '🍔' },
  { id: '2', name: 'Bebidas', icon: '🥤' },
  { id: '3', name: 'Sobremesas', icon: '🍦' },
  { id: '4', name: 'Pizzas', icon: '🍕' },
  { id: '5', name: 'Saladas', icon: '🥗' },
];

export const products = {
  '1': [
    { id: 'p1', name: 'X-Burguer', price: 18.90, description: 'Pão brioche, hambúrguer 180g, queijo, alface e tomate.', image: 'https://picsum.photos/seed/xburguer/400/250' },
    { id: 'p2', name: 'X-Bacon', price: 22.90, description: 'Pão brioche, hambúrguer duplo, bacon crocante e queijo cheddar.', image: 'https://picsum.photos/seed/xbacon/400/250' },
    { id: 'p3', name: 'X-Frango', price: 19.90, description: 'Pão brioche, frango grelhado, maionese temperada e alface.', image: 'https://picsum.photos/seed/xfrango/400/250' },
    { id: 'p4', name: 'Veggie Burguer', price: 20.90, description: 'Pão integral, hambúrguer de grão-de-bico, tomate e rúcula.', image: 'https://picsum.photos/seed/veggie/400/250' },
  ],
  '2': [
    { id: 'p5', name: 'Coca-Cola Lata', price: 6.00, description: 'Refrigerante gelado 350ml.', image: 'https://picsum.photos/seed/coca/400/250' },
    { id: 'p6', name: 'Suco de Laranja', price: 8.90, description: 'Suco natural espremido na hora 400ml.', image: 'https://picsum.photos/seed/suco/400/250' },
    { id: 'p7', name: 'Água Mineral', price: 4.00, description: 'Água sem gás 500ml.', image: 'https://picsum.photos/seed/agua/400/250' },
    { id: 'p8', name: 'Milkshake Chocolate', price: 16.90, description: 'Milkshake cremoso de chocolate belga 400ml.', image: 'https://picsum.photos/seed/milk/400/250' },
  ],
  '3': [
    { id: 'p9', name: 'Sorvete 2 Bolas', price: 12.00, description: 'Sorvete artesanal com 2 sabores à escolha.', image: 'https://picsum.photos/seed/sorvete/400/250' },
    { id: 'p10', name: 'Petit Gateau', price: 18.00, description: 'Bolinho quente de chocolate com sorvete de baunilha.', image: 'https://picsum.photos/seed/petit/400/250' },
    { id: 'p11', name: 'Pudim', price: 10.00, description: 'Pudim de leite condensado, receita tradicional.', image: 'https://picsum.photos/seed/pudim/400/250' },
  ],
  '4': [
    { id: 'p12', name: 'Pizza Margherita', price: 42.00, description: 'Molho de tomate, mussarela fresca e manjericão.', image: 'https://picsum.photos/seed/marghe/400/250' },
    { id: 'p13', name: 'Pizza Calabresa', price: 45.00, description: 'Molho de tomate, mussarela e calabresa fatiada.', image: 'https://picsum.photos/seed/calab/400/250' },
    { id: 'p14', name: 'Pizza 4 Queijos', price: 48.00, description: 'Mussarela, provolone, gorgonzola e parmesão.', image: 'https://picsum.photos/seed/queijo/400/250' },
  ],
  '5': [
    { id: 'p15', name: 'Salada Caesar', price: 24.00, description: 'Alface romana, croutons, parmesão e molho caesar.', image: 'https://picsum.photos/seed/caesar/400/250' },
    { id: 'p16', name: 'Salada Tropical', price: 22.00, description: 'Mix de folhas, manga, abacaxi e molho de maracujá.', image: 'https://picsum.photos/seed/tropical/400/250' },
  ],
};

export const restaurants = [
  { id: 'r1', name: 'Lanchonete do Zé', address: 'Rua da Carioca, 10', rating: 4.5, lat: -22.9068, lng: -43.1729, menuItem: { name: 'X-Tudo', price: 25.00, image: 'https://picsum.photos/seed/xtudo/300/180' } },
  { id: 'r2', name: 'Pizzaria Roma', address: 'Av. Rio Branco, 45', rating: 4.7, lat: -22.9035, lng: -43.1765, menuItem: { name: 'Pizza Napolitana', price: 52.00, image: 'https://picsum.photos/seed/napo/300/180' } },
  { id: 'r3', name: 'Bistrô Central', address: 'Rua do Ouvidor, 22', rating: 4.3, lat: -22.9055, lng: -43.1743, menuItem: { name: 'Salmão Grelhado', price: 65.00, image: 'https://picsum.photos/seed/salmon/300/180' } },
  { id: 'r4', name: 'Tapiocaria Carioca', address: 'Av. Presidente Vargas, 100', rating: 4.6, lat: -22.9080, lng: -43.1700, menuItem: { name: 'Tapioca de Frango', price: 18.00, image: 'https://picsum.photos/seed/tapio/300/180' } },
  { id: 'r5', name: 'Sushi Boa Vista', address: 'Rua Visconde de Inhaúma, 5', rating: 4.8, lat: -22.9020, lng: -43.1780, menuItem: { name: 'Combo Sushi 20 peças', price: 89.00, image: 'https://picsum.photos/seed/sushi/300/180' } },
  { id: 'r6', name: 'Açaí da Praça', address: 'Praça XV de Novembro, 3', rating: 4.4, lat: -22.9090, lng: -43.1750, menuItem: { name: 'Açaí 500ml', price: 20.00, image: 'https://picsum.photos/seed/acai/300/180' } },
  { id: 'r7', name: 'Churrascaria do Porto', address: 'Av. Marechal Floriano, 70', rating: 4.2, lat: -22.9045, lng: -43.1710, menuItem: { name: 'Picanha na Brasa', price: 95.00, image: 'https://picsum.photos/seed/picanha/300/180' } },
  { id: 'r8', name: 'Padaria Estrela', address: 'Rua Gonçalves Dias, 15', rating: 4.1, lat: -22.9060, lng: -43.1790, menuItem: { name: 'Misto Quente', price: 12.00, image: 'https://picsum.photos/seed/misto/300/180' } },
  { id: 'r9', name: 'Casa Árabe', address: 'Rua do Rosário, 30', rating: 4.5, lat: -22.9075, lng: -43.1730, menuItem: { name: 'Esfiha de Carne', price: 8.00, image: 'https://picsum.photos/seed/esfih/300/180' } },
  { id: 'r10', name: 'Burguer House', address: 'Av. Almirante Barroso, 52', rating: 4.6, lat: -22.9030, lng: -43.1760, menuItem: { name: 'Smash Burguer', price: 38.00, image: 'https://picsum.photos/seed/smash/300/180' } },
];

export const mockOrders = [
  { id: 'o1', date: '10/06/2026', items: ['X-Burguer x2', 'Coca-Cola x1'], total: 43.80, status: 'Entregue' },
  { id: 'o2', date: '15/06/2026', items: ['Pizza Margherita x1', 'Suco de Laranja x2'], total: 59.80, status: 'Em andamento' },
  { id: 'o3', date: '20/06/2026', items: ['Salada Caesar x1', 'Água Mineral x1'], total: 28.00, status: 'Entregue' },
];
