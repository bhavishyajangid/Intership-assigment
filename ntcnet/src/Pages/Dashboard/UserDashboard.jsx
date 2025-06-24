import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '../../exports';
import Footer from '../../components/Footer';

const UserDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-primary text-white  px-3 ">
      <div className="max-w-md mx-auto flex flex-col overflow-hidden relative">
        {/* Header */}
        <Header setIsOpen={setIsOpen} />

        {/* Main content area */}
          <Sidebar isOpen={isOpen}  />
          <main className='py-5 min-h-screen'>
            <Outlet />
          </main>
      </div>
    </div>
  );
};

export default UserDashboard;
