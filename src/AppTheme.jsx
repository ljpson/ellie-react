import React, { useContext } from 'react';
import './AppTheme.css';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';


export default function AppTheme() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function Header() {
  return <header className='header'>Header</header>;
}

function Main() {
  return (
    <main className='main'>
      Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <DarkModeProvider>
        <ProductDetail />
      </DarkModeProvider>
    </div>
  );
}

function ProductDetail() {
  const { darkMode, toggleDarkMode} = useContext(DarkModeContext)
  return (
    <div>
      Product Detail
      <p>
        DarkMode: 
        {darkMode ? (
          <span style={{backgroundColor: 'black', color:'white'}}>Dark Mode</span>
        ) : (
          <span>Light Mode</span>
        )}
        </p>
      <button className='bg-yellow-500 rounded-xl px-2' onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className='footer'>Footer</footer>;
}
