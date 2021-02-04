import './App.css';
import { ShopItemFuncClassBased } from './components/ShopItemFunc/ShopItemFuncClassBased';
import { Item } from './model/Item';

function App() {
  const item = new Item();
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFuncClassBased item ={item} />
      </div>
    </div>
  );
}

export default App;
