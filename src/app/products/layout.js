const Layout = ({ children }) => {
  return (
    <section>
      {children}
      <h1 className="text-2xl font-bold mb-4">Related Products</h1>
    </section>
  );
};

export default Layout;