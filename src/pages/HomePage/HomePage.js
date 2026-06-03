import React, { useEffect, useState, useRef } from "react";
import styles from "./HomePage.module.css";
import Loader from "../../components/UI/Loader/Loader";
import ProductList from "../../components/Product/ProductList/ProductList";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import {
  getAllProducts,
  getProducts,
  getFilteredProducts,
  getLoadingState,
  filterProducts,
} from "../../redux/reducers/productsReducer";
import { useDispatch, useSelector } from "react-redux";
// import { getAuth } from "firebase/auth";
import { addDataToCollection } from "../../utils/utils";

function HomePage() {
  const [query, setQuery] = useState("");
  const [priceRange, setPriceRange] = useState(75000);
  const [categories, setCategories] = useState({
    mensFashion: false,
    electronics: false,
    jewelery: false,
    womensClothing: false,
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  const dispatch = useDispatch();

  const products = useSelector(getProducts);
  console.log(products);
  const filteredProducts = useSelector(getFilteredProducts);
  const loading = useSelector(getLoadingState);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fetch products on app mount
  useEffect(() => {
    dispatch(getAllProducts());
    addDataToCollection();
  }, [dispatch]);

  // Rerender the products if the search or filter parameters change
  useEffect(() => {
    dispatch(filterProducts({ priceRange, searchQuery: query, categories }));
  }, [priceRange, query, categories, dispatch]);

  // Display loader while products are fetching
  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.searchFilterBar} ref={filterRef}>
        <input
          type="search"
          placeholder="Search By Name"
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className={`${styles.filterPill} ${isFilterOpen ? styles.active : ''}`}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <span className={styles.filterIcon}>⚙</span>
          Filters
        </button>
        {isFilterOpen && (
          <div className={styles.filterDropdown}>
            <FilterSidebar
              setCategories={setCategories}
              setPriceRange={setPriceRange}
              priceRange={priceRange}
            />
          </div>
        )}
      </div>
      {products.length ? (
        <ProductList products={products.length ? filteredProducts : null} />
      ) : null}
    </div>
  );
}

export default HomePage;
