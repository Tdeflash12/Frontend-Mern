import { Link, useSearchParams } from 'react-router'
import { products } from '../data/products'

const categoryLinks = [
  { label: 'All products', value: '' },
  { label: 'Smartphones', value: 'smartphones' },
  { label: 'Laptops', value: 'laptops' },
  { label: 'Accessories', value: 'accessories' },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: low to high', value: 'price-asc' },
  { label: 'Price: high to low', value: 'price-desc' },
  { label: 'Highest rated', value: 'rating-desc' },
]

const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get('q') ?? ''
  const selectedCategory = searchParams.get('category') ?? ''
  const sort = searchParams.get('sort') ?? 'featured'

  const filteredProducts = products.filter((product) => {
    const normalizedQuery = query.trim().toLowerCase()

    const matchesQuery =
      normalizedQuery === '' ||
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.brand.toLowerCase().includes(normalizedQuery)

    const matchesCategory =
      selectedCategory === '' || product.category === selectedCategory

    return matchesQuery && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((first, second) => {
    if (sort === 'price-asc') {
      return first.price - second.price
    }

    if (sort === 'price-desc') {
      return second.price - first.price
    }

    if (sort === 'rating-desc') {
      return second.rating - first.rating
    }

    return first.id - second.id
  })

  const updateSearch = (key, value) => {
    const nextParams = new URLSearchParams(searchParams)

    if (value) {
      nextParams.set(key, value)
    } else {
      nextParams.delete(key)
    }

    setSearchParams(nextParams)
  }

  const updateSort = (value) => updateSearch('sort', value)

  const clearFilters = () => setSearchParams({})

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroCopy}>
          <p style={styles.kicker}>Premium catalog</p>
          <h1 style={styles.title}>Shop products with clarity and speed.</h1>
          <p style={styles.subtitle}>
            Browse a curated selection, narrow results instantly, and jump into a detailed product view when you want more context.
          </p>

          <div style={styles.statsRow}>
            <div style={styles.statCard}>
              <strong style={styles.statValue}>24h</strong>
              <span style={styles.statLabel}>Fast delivery</span>
            </div>
            <div style={styles.statCard}>
              <strong style={styles.statValue}>4.8/5</strong>
              <span style={styles.statLabel}>Average rating</span>
            </div>
            <div style={styles.statCard}>
              <strong style={styles.statValue}>12+</strong>
              <span style={styles.statLabel}>Curated deals</span>
            </div>
          </div>
        </div>

        <div style={styles.featureCard}>
          <span style={styles.featureBadge}>Editor&apos;s pick</span>
          <h2 style={styles.featureTitle}>Galaxy X Pro</h2>
          <p style={styles.featureText}>
            A strong all-rounder for people who want flagship features without extra clutter.
          </p>
          <div style={styles.featureMetaRow}>
            <span style={styles.featureMeta}>OLED display</span>
            <span style={styles.featureMeta}>48MP camera</span>
            <span style={styles.featureMeta}>5000 mAh</span>
          </div>
          <Link to="1" style={styles.featureLink}>
            View smartphone details
          </Link>
        </div>
      </section>

      <section style={styles.toolbar}>
        <div style={styles.toolbarHeader}>
          <div>
            <p style={styles.toolbarLabel}>Browse options</p>
            <h2 style={styles.sectionTitle}>Refine the product list</h2>
          </div>
          <button type="button" onClick={clearFilters} style={styles.clearButton}>
            Reset all
          </button>
        </div>

        <div style={styles.toolbarGrid}>
          <label style={styles.searchBox}>
            <span style={styles.searchLabel}>Search</span>
            <input
              type="text"
              value={query}
              onChange={(event) => updateSearch('q', event.target.value)}
              placeholder="Search by name or brand"
              style={styles.searchInput}
            />
          </label>

          <label style={styles.selectBox}>
            <span style={styles.searchLabel}>Sort by</span>
            <select value={sort} onChange={(event) => updateSort(event.target.value)} style={styles.selectInput}>
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div style={styles.filterRow}>
          {categoryLinks.map((item) => {
            const active = selectedCategory === item.value

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => updateSearch('category', item.value)}
                style={{
                  ...styles.filterButton,
                  ...(active ? styles.filterButtonActive : null),
                }}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </section>

      <section>
        <div style={styles.resultsBar}>
          <h2 style={styles.sectionTitle}>Products</h2>
          <p style={styles.resultCount}>{sortedProducts.length} item(s) shown</p>
        </div>

        <div style={styles.grid}>
          {sortedProducts.map((product) => (
            <article key={product.id} style={styles.card}>
              <div style={styles.cardTop}>
                <span style={styles.categoryTag}>{product.category}</span>
                <span style={styles.rating}>★ {product.rating}</span>
              </div>

              <h3 style={styles.cardTitle}>{product.name}</h3>
              <p style={styles.brand}>{product.brand}</p>
              <p style={styles.description}>{product.description}</p>

              <div style={styles.cardFooter}>
                <strong style={styles.price}>${product.price}</strong>
                <Link to={`${product.id}`} style={styles.detailLink}>
                    Open detail
                </Link>
              </div>
            </article>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div style={styles.emptyState}>
            <h3 style={styles.emptyTitle}>No matches found</h3>
            <p style={styles.emptyText}>Try a different search term or clear the active filter.</p>
          </div>
        )}
      </section>
    </main>
  )
}

const styles = {
  page: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '2rem 1rem 3rem',
    color: '#1f2333',
    fontFamily: 'Space Grotesk, sans-serif',
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 0.9fr)',
    gap: '1rem',
    alignItems: 'stretch',
    marginBottom: '1.5rem',
  },
  heroCopy: {
    padding: '1.5rem',
    borderRadius: '1.25rem',
    background: 'linear-gradient(135deg, #fff6f1 0%, #f4f7ff 100%)',
    border: '1px solid rgba(31, 35, 51, 0.08)',
    boxShadow: '0 18px 42px rgba(31, 35, 51, 0.08)',
  },
  kicker: {
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    fontSize: '0.72rem',
    color: '#e4572e',
    fontWeight: 700,
  },
  title: {
    margin: '0.45rem 0 0.75rem',
    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
    lineHeight: 1,
  },
  subtitle: {
    margin: 0,
    maxWidth: '56ch',
    color: 'rgba(31, 35, 51, 0.75)',
    fontSize: '1rem',
    lineHeight: 1.7,
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '0.75rem',
    marginTop: '1.25rem',
  },
  statCard: {
    padding: '0.9rem',
    borderRadius: '0.95rem',
    background: 'rgba(255, 255, 255, 0.65)',
    border: '1px solid rgba(31, 35, 51, 0.08)',
  },
  statValue: {
    display: 'block',
    fontSize: '1.05rem',
    marginBottom: '0.15rem',
  },
  statLabel: {
    color: 'rgba(31, 35, 51, 0.68)',
    fontSize: '0.88rem',
  },
  featureCard: {
    padding: '1.5rem',
    borderRadius: '1.25rem',
    background: 'linear-gradient(180deg, #1f2333 0%, #343c5c 100%)',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 18px 42px rgba(31, 35, 51, 0.16)',
  },
  featureBadge: {
    display: 'inline-flex',
    width: 'fit-content',
    padding: '0.35rem 0.7rem',
    borderRadius: '999px',
    background: 'rgba(255, 255, 255, 0.14)',
    fontSize: '0.78rem',
    fontWeight: 700,
  },
  featureTitle: {
    margin: '1rem 0 0.5rem',
    fontSize: '1.7rem',
  },
  featureText: {
    margin: 0,
    lineHeight: 1.7,
    color: 'rgba(255, 255, 255, 0.82)',
  },
  featureMetaRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '1rem',
  },
  featureMeta: {
    padding: '0.35rem 0.6rem',
    borderRadius: '999px',
    background: 'rgba(255, 255, 255, 0.12)',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '0.8rem',
    fontWeight: 700,
  },
  featureLink: {
    marginTop: '1.25rem',
    width: 'fit-content',
    padding: '0.75rem 1rem',
    borderRadius: '999px',
    background: '#ffffff',
    color: '#1f2333',
    textDecoration: 'none',
    fontWeight: 700,
  },
  toolbar: {
    display: 'grid',
    gap: '1rem',
    padding: '1.1rem',
    borderRadius: '1rem',
    background: 'rgba(255, 255, 255, 0.82)',
    border: '1px solid rgba(31, 35, 51, 0.08)',
    backdropFilter: 'blur(10px)',
    marginBottom: '1.5rem',
  },
  toolbarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
  },
  toolbarLabel: {
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    fontSize: '0.72rem',
    fontWeight: 700,
    color: '#e4572e',
  },
  toolbarGrid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.6fr) minmax(220px, 0.8fr)',
    gap: '0.9rem',
  },
  searchBox: {
    display: 'grid',
    gap: '0.45rem',
  },
  selectBox: {
    display: 'grid',
    gap: '0.45rem',
  },
  searchLabel: {
    fontSize: '0.88rem',
    fontWeight: 700,
  },
  searchInput: {
    width: '100%',
    border: '1px solid rgba(31, 35, 51, 0.15)',
    borderRadius: '0.9rem',
    padding: '0.9rem 1rem',
    fontSize: '1rem',
    outline: 'none',
  },
  selectInput: {
    width: '100%',
    border: '1px solid rgba(31, 35, 51, 0.15)',
    borderRadius: '0.9rem',
    padding: '0.9rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#ffffff',
    outline: 'none',
  },
  filterRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.6rem',
  },
  filterButton: {
    border: '1px solid rgba(31, 35, 51, 0.14)',
    background: '#ffffff',
    padding: '0.65rem 0.95rem',
    borderRadius: '999px',
    cursor: 'pointer',
    fontWeight: 700,
    color: '#1f2333',
  },
  filterButtonActive: {
    background: '#e4572e',
    color: '#ffffff',
    borderColor: '#e4572e',
  },
  clearButton: {
    width: 'fit-content',
    border: '0',
    background: 'transparent',
    color: '#e4572e',
    fontWeight: 700,
    padding: 0,
    cursor: 'pointer',
  },
  resultsBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    gap: '1rem',
    marginBottom: '1rem',
  },
  sectionTitle: {
    margin: 0,
    fontSize: '1.5rem',
  },
  resultCount: {
    margin: 0,
    color: 'rgba(31, 35, 51, 0.68)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gap: '1rem',
  },
  card: {
    padding: '1.1rem',
    borderRadius: '1.1rem',
    background: 'linear-gradient(180deg, #ffffff 0%, #fbfcff 100%)',
    border: '1px solid rgba(31, 35, 51, 0.08)',
    boxShadow: '0 14px 30px rgba(31, 35, 51, 0.06)',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '0.75rem',
    marginBottom: '0.9rem',
  },
  categoryTag: {
    textTransform: 'capitalize',
    fontSize: '0.78rem',
    padding: '0.3rem 0.6rem',
    borderRadius: '999px',
    background: '#f4f7ff',
    color: '#343c5c',
    fontWeight: 700,
  },
  rating: {
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#e4572e',
  },
  cardTitle: {
    margin: '0 0 0.35rem',
    fontSize: '1.15rem',
  },
  brand: {
    margin: 0,
    fontWeight: 700,
    color: '#343c5c',
  },
  description: {
    margin: '0.75rem 0 1rem',
    color: 'rgba(31, 35, 51, 0.75)',
    lineHeight: 1.6,
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
  },
  price: {
    fontSize: '1.1rem',
  },
  detailLink: {
    textDecoration: 'none',
    color: '#e4572e',
    fontWeight: 700,
  },
  mutedText: {
    color: 'rgba(31, 35, 51, 0.55)',
    fontWeight: 700,
  },
  emptyState: {
    marginTop: '1rem',
    padding: '1.25rem',
    borderRadius: '1rem',
    background: '#fff6f1',
    border: '1px solid rgba(228, 87, 46, 0.15)',
  },
  emptyTitle: {
    margin: '0 0 0.25rem',
  },
  emptyText: {
    margin: 0,
    color: 'rgba(31, 35, 51, 0.75)',
  },
}

export default Product