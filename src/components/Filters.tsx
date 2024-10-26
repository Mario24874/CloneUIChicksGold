import { Search } from 'lucide-react';
import '../styles/filters.css'; 

const Filters = () => {
  return (
    <div className="filters">
      <div className="filters-left">
        <div className="game-select-container">
          <img src="/assets/sword.png" alt="Select Game" className="game-select-icon" />
          <select className="game-select">        
            <option>Select a game</option>
            <option>Game 1</option>
            <option>Game 2</option>
          </select>
        </div>
        
        <div className="search-input-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
        </div>
      </div>
      
      <div className="filters-right">
        <div className="filter-select-container">
          <img src="/assets/money_bag.png" alt="Price" className="filter-select-icon" />
          <span className="filter-text">Price</span>
          <select className="filter-select">
            <option>All</option>
            <option>Price</option>
            <option>Type</option>
          </select>
        </div>
        
        <div className="item-select-container">
          <img src="/assets/feather.png" alt="Item type" className="item-select-icon" />
          <span className="item-text">Item type</span>
          <select className="item-select">
            <option>All</option>
            <option>Characters</option>
            <option>Elements</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;