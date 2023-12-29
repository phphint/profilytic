import Header from './Header';
// ... other imports

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* ... other components */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
