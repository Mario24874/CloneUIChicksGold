import React from 'react';
import ProductGrid from './ProductGrid';
import { Product } from '../types';
import '../../styles/products.css';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      <div className="filters-sort">
        <FilterSort />
      </div>
      <ProductGrid products={products} />
      <Pagination />
    </div>
  );
};

const FilterSort = () => (
  <div className="sort-by-container">
    <img src="/assets/sort_by.png" alt="Sort by" className="sort-by-icon" />
    <span className="sort-by-text">Sort by</span>
    <select className="sort-select">
      <option>Featured</option>
      <option>Newest</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
    </select>
  </div>
);

const Pagination = () => (
  <div className="pagination">
    <button className="pagination-arrow pagination-arrow-left">&lt;</button>
    <nav className="pagination-nav">
      {[1, 2, 3, 4, '...', 11].map((page, index) => (
        <button
          key={index}
          className={`pagination-button ${page === 1 ? 'active' : ''}`}
        >
          {page}
        </button>
      ))}
    </nav>
    <button className="pagination-arrow pagination-arrow-right">&gt;</button>
  </div>
);

export default ProductList;
