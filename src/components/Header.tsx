import React from 'react';

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">Bem-vindo, {userName}!</h1>
    </header>
  );
};

export default Header;