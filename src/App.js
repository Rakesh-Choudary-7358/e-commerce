import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import Products from './pages/Products/Products';


function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Summary of key metrics or features here.</p>
    </div>
  );
}



function ProductsManagement() {
  return (
    <div>
      <h2>Products Management</h2>
      <p>List of products with add, edit, delete functionalities here.</p>
    </div>
  );
}




function OrdersManagement() {
  return (
    <div>
      <h2>Orders Management</h2>
      <p>List of orders with optional view details, update status, delete functionalities here.</p>
    </div>
  );
}



function OrdersCalendarView() {
  return (
    <div>
      <h2>Orders Calendar View</h2>
      <p>Calendar view displaying orders based on expected delivery dates here.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Link className='navbar-brand' to="/">Rocket</Link>
        <Nav className="mr-auto">
          <Link className='nav-link' to="/">Dashboard</Link>
          <Link className='nav-link' to="products">Products</Link>
          <Link className='nav-link' to="/orders">My Orders</Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" exact element={<Dashboard/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/orders" element={<OrdersManagement/>} />
        <Route path="/calendar" element={<OrdersCalendarView/>} />
      </Routes>
    </Router>
  );
}





export default App;