import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import Login from './components/Login';
import AddUser from './components/AddUser';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import GeneratePDF from './components/GeneratePDF';

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <AuthProvider>
      <div className="App">
        {!isAuthenticated ? (
          <Login />
        ) : (
          <>
            <AddUser />
            <AddProduct />
            <ProductList />
            <GeneratePDF />
          </>
        )}
      </div>
    </AuthProvider>
  );
};

export default App;