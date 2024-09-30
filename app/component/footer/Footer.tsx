import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Kavun.com</h2>
          <p className="text-sm">Tüm hakları saklıdır © 2024</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">Hakkında</a>
          <a href="#" className="hover:text-gray-400">İletişim</a>
          <a href="#" className="hover:text-gray-400">Gizlilik Politikası</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
