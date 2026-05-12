import { Link, useParams } from 'react-router'
import { products } from '../data/products'

const ProductsDetail = () => {
  const { id } = useParams()
  const product = products.find((item) => String(item.id) === id)

  if (!product) {
    return (
      <main style={styles.page}>
        <section style={styles.notFoundCard}>
          <p style={styles.kicker}>Product not found</p>
          <h1 style={styles.title}>We could not find that item.</h1>
          <p style={styles.subtitle}>
            The route id does not match any product in the current catalog.
          </p>
          <Link to="/products" style={styles.backLink}>
            Back to products
          </Link>
        </section>
      </main>
    )
  }

  const specs = [
    `Category: ${product.category}`,
    `Brand: ${product.brand}`,
    `Price: $${product.price}`,
    `Rating: ${product.rating}`,
  ]

  const highlights = [
    'Responsive performance for daily use',
    'Modern clean design with a premium feel',
    'Built for smooth browsing and media consumption',
  ]

  return (
    <main style={styles.page}>
      <section style={styles.headerCard}>
        <div>
          <p style={styles.kicker}>{product.category}</p>
          <h1 style={styles.title}>{product.name}</h1>
          <p style={styles.subtitle}>
            {product.brand} product experience built for speed, balance, and everyday use.
          </p>
        </div>

        <div style={styles.priceCard}>
          <span style={styles.priceLabel}>Price</span>
          <strong style={styles.price}>${product.price}</strong>
          <span style={styles.rating}>★ {product.rating}</span>
        </div>
      </section>

      <section style={styles.layout}>
        <article style={styles.mainPanel}>
          <h2 style={styles.sectionTitle}>Overview</h2>
          <p style={styles.bodyText}>{product.description}</p>

          <div style={styles.actionRow}>
            <Link to="/products" style={styles.backLink}>
              Back to products
            </Link>
            <button type="button" style={styles.primaryButton}>
              Add to cart
            </button>
          </div>
        </article>

        <aside style={styles.sidePanel}>
          <h2 style={styles.sectionTitle}>Key specs</h2>
          <ul style={styles.list}>
            {specs.map((spec) => (
              <li key={spec} style={styles.listItem}>
                {spec}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section style={styles.featureGrid}>
        <article style={styles.featureCard}>
          <h2 style={styles.sectionTitle}>Why it stands out</h2>
          <ul style={styles.list}>
            {highlights.map((item) => (
              <li key={item} style={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article style={styles.featureCardDark}>
          <p style={styles.smallLabel}>What you get</p>
          <h2 style={styles.sectionTitleDark}>A clear, dynamic product panel</h2>
          <p style={styles.darkBodyText}>
            This detail page now reads the product id from the URL, so each card can open its own page.
          </p>
        </article>
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
  headerCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    gap: '1rem',
    padding: '1.5rem',
    borderRadius: '1.3rem',
    background: 'linear-gradient(135deg, #1f2333 0%, #3c466a 100%)',
    color: '#ffffff',
    marginBottom: '1.5rem',
    boxShadow: '0 20px 42px rgba(31, 35, 51, 0.16)',
  },
  kicker: {
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    fontSize: '0.72rem',
    color: '#ffd7cb',
    fontWeight: 700,
  },
  title: {
    margin: '0.45rem 0 0.75rem',
    fontSize: 'clamp(2rem, 4vw, 3.25rem)',
    lineHeight: 1,
  },
  subtitle: {
    margin: 0,
    maxWidth: '58ch',
    color: 'rgba(255, 255, 255, 0.82)',
    lineHeight: 1.7,
  },
  priceCard: {
    minWidth: '170px',
    padding: '1rem',
    borderRadius: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    display: 'grid',
    alignContent: 'center',
    gap: '0.35rem',
    textAlign: 'right',
  },
  priceLabel: {
    fontSize: '0.86rem',
    color: 'rgba(255, 255, 255, 0.75)',
  },
  price: {
    fontSize: '2rem',
  },
  rating: {
    fontWeight: 700,
    color: '#ffd7cb',
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.4fr) minmax(280px, 0.9fr)',
    gap: '1rem',
    marginBottom: '1rem',
  },
  mainPanel: {
    padding: '1.4rem',
    borderRadius: '1.1rem',
    background: '#ffffff',
    border: '1px solid rgba(31, 35, 51, 0.08)',
    boxShadow: '0 14px 30px rgba(31, 35, 51, 0.06)',
  },
  sidePanel: {
    padding: '1.4rem',
    borderRadius: '1.1rem',
    background: 'linear-gradient(180deg, #fff6f1 0%, #f4f7ff 100%)',
    border: '1px solid rgba(31, 35, 51, 0.08)',
  },
  sectionTitle: {
    margin: '0 0 0.9rem',
    fontSize: '1.4rem',
  },
  bodyText: {
    margin: 0,
    color: 'rgba(31, 35, 51, 0.75)',
    lineHeight: 1.75,
  },
  actionRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginTop: '1.3rem',
  },
  backLink: {
    textDecoration: 'none',
    color: '#1f2333',
    background: '#f4f7ff',
    border: '1px solid rgba(31, 35, 51, 0.08)',
    padding: '0.8rem 1rem',
    borderRadius: '999px',
    fontWeight: 700,
  },
  primaryButton: {
    border: '0',
    background: '#e4572e',
    color: '#ffffff',
    padding: '0.8rem 1rem',
    borderRadius: '999px',
    fontWeight: 700,
    cursor: 'pointer',
  },
  list: {
    margin: 0,
    paddingLeft: '1.1rem',
    display: 'grid',
    gap: '0.7rem',
  },
  listItem: {
    lineHeight: 1.65,
    color: 'rgba(31, 35, 51, 0.78)',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
    gap: '1rem',
  },
  notFoundCard: {
    padding: '1.5rem',
    borderRadius: '1.25rem',
    background: 'linear-gradient(135deg, #fff6f1 0%, #f4f7ff 100%)',
    border: '1px solid rgba(31, 35, 51, 0.08)',
    boxShadow: '0 18px 42px rgba(31, 35, 51, 0.08)',
  },
  featureCard: {
    padding: '1.4rem',
    borderRadius: '1.1rem',
    background: '#ffffff',
    border: '1px solid rgba(31, 35, 51, 0.08)',
    boxShadow: '0 14px 30px rgba(31, 35, 51, 0.06)',
  },
  featureCardDark: {
    padding: '1.4rem',
    borderRadius: '1.1rem',
    background: 'linear-gradient(180deg, #1f2333 0%, #343c5c 100%)',
    color: '#ffffff',
    boxShadow: '0 14px 30px rgba(31, 35, 51, 0.12)',
  },
  smallLabel: {
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    fontSize: '0.72rem',
    color: '#ffd7cb',
    fontWeight: 700,
  },
  sectionTitleDark: {
    margin: '0.45rem 0 0.9rem',
    fontSize: '1.4rem',
  },
  darkBodyText: {
    margin: 0,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 1.75,
  },
}

export default ProductsDetail