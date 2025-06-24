import SidebarItem from './SidebarItem';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Users,
  TrendingUp,
  Share2,
  BarChart2,
  Monitor,
  LogOut,
} from 'lucide-react';
import { PiHandWithdraw } from 'react-icons/pi';

const sidebarItems = [
  { icon: Home, label: 'Dashboard', link: 'dashboard' },
  { icon: Users, label: 'Team', link: '/team' },
  { icon: TrendingUp, label: 'Invest', link: '/invest' },
  { icon: Share2, label: 'Referral', link: '/Referral' },
  { icon: BarChart2, label: 'Reports', link: '/report' },
  { icon: PiHandWithdraw, label: 'WithDraw', link: '/withdraw' },
  { icon: Monitor, label: 'Disconnect', link: '/' },
  { icon: LogOut, label: 'Logout', link: '/' },
];

const Sidebar = ({ isOpen }) => {
  return (
    <>
      {/* Mobile Sidebar */}
      <aside
        className={`absolute p-3 rounded-lg top-13 right-0 w-60 h-full bg-[#1C1F26] z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-2">
          {sidebarItems.map(({ icon, label, link }, index) => (
          <NavLink
            key={index}
            to={link}
            className={({ isActive }) =>
              isActive
                ? 'bg-[linear-gradient(to_right,_#00D1B233_0%,_#66666620_40%,_#66666600_100%)] rounded-2xl text-[#33dde9]'
                : ''
            }
          >
            <SidebarItem icon={icon} label={label} showLabel />
          </NavLink>
        ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
