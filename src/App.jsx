import './App.css';
import Game from './components/TrenEnRaya/Game';
import FilterableProductTable from './components/PensarReact/FilterableProductTable';

function App() {
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}
const PRODUCTS = [
  { category: 'Frutas', price: '$1', stocked: true, name: 'Manzana' },
  { category: 'Frutas', price: '$1', stocked: true, name: 'Fruta del dragón' },
  { category: 'Frutas', price: '$2', stocked: false, name: 'Maracuyá' },
  { category: 'Verduras', price: '$2', stocked: true, name: 'Espinaca' },
  { category: 'Verduras', price: '$4', stocked: false, name: 'Calabaza' },
  { category: 'Verduras', price: '$1', stocked: true, name: 'Guisantes' },
];
export default App;
