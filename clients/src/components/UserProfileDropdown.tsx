import { useState, useRef, useEffect } from "react";
import { User, Settings,  Bell, HelpCircle } from "lucide-react";
// import { useUser } from '../pages/AuthContext2';

const UserProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  // const { user } = useUser();
  const user = JSON.parse(localStorage.getItem("userInfo") || "{}");
  
  // const userId = user._id;

  // const handleDelete = () => {
  //     axios
  //       .get("http://localhost:3000/api/v1/logout")
  //       .then((res) => {
  //         location.reload(true);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 hover:bg-gray-100 rounded-full p-1.5 transition-colors duration-200"
      >
        {/* <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User avatar"
          className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
        /> */}
        <span className="font-medium text-gray-700">{user.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-700">Signed in as</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>

          <div className="py-2">
            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3">
              <User size={16} />
              <span>Your Profile</span>
            </button>
            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3">
              <Settings size={16} />
              <span>Settings</span>
            </button>
            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3">
              <Bell size={16} />
              <a href="/userHistory">History</a>
              {/* <Link to='/userHistory'>History</Link> */}
            </button>
            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3">
              <HelpCircle size={16} />
              <a href="/userHelp">Help & Support</a>
            </button>
            {
              user.role === "admin" &&
            

            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3">
              <HelpCircle size={16} />
              <a href="/admin/dashBoard">DashBoard</a>
            </button>
            }
          </div>

          {/* <div className="border-t border-gray-100 py-2">
            <button
              // onClick={handleDelete}
              className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 flex items-center space-x-3"
            >
              <LogOut size={16} />
              <span>Sign out</span>
            </button>
          </div> */}
        </div>
      )}
      {/* <Cart2 isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} /> */}
    </div>
  );
};

export default UserProfileDropdown;
