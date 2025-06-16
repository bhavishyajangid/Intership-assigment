
import SidebarItem from './SidebarItem';
import clsx from 'clsx'; 
import {
  Home,
  Users,
  TrendingUp,
  Share2,
  User,
  BarChart2,
  Monitor,
  LogOut,
} from 'lucide-react';
import { PiHandWithdraw } from "react-icons/pi";
 const sidebarItems = [
  { icon: Home, label: 'Dashboard' },
  { icon: Users, label: 'Team' },
  { icon: TrendingUp, label: 'Invest' },
  { icon: Share2, label: 'Referral' },
  { icon: BarChart2, label: 'Reports' },
  { icon: PiHandWithdraw, label: 'WithDraw' },
  { icon: Monitor, label: 'Disconnect' },
  { icon: LogOut, label: 'Logout' },
];
const Sidebar = ({ isOpen }) => {
 return (
  <>
       {/* Desktop Sidebar: Collapsible on hover */}
      <aside
        className={`bg-[#1C1F26] rounded-lg mt-4 p-2 hidden max-sm:hidden md:flex flex-col items-start gap-2 transition-all duration-300 group relative hover:w-56 transtion ease-in-out  `}
      >
        {sidebarItems.map(({ icon, label }, index) => (
          <SidebarItem key={index} icon={icon} label={label} />
        ))}
      </aside>

      {/* Mobile Sidebar: Slide-in drawer from right */}
      <aside
        className={`md:hidden fixed p-3 rounded-lg top-13 right-0 w-60 h-full bg-[#1C1F26] z-50  transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-2 ">
          {sidebarItems.map(({ icon, label }, index) => (
            <SidebarItem key={index} icon={icon} label={label} showLabel />
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
