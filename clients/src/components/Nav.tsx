import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import type { RootState } from "../store";
import { useLogoutMutation } from "../slices/userApi";
import { clearUserInfo } from "../slices/auth";
import { ShoppingCart } from "lucide-react";
import useCartStore from "../store/cartStore";
import Cart from "./Cart";
import UserProfileDropdown from "./UserProfileDropdown";

const Nav = () => {
  const userInfo = useSelector((state: RootState) => state.auth.userInfo);
  const [logout,{isLoading}]=useLogoutMutation()
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const logoutHandler = async()=>{
    try {
      await logout({})
      dispatch(clearUserInfo())
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  const user = JSON.parse(localStorage.getItem("userInfo") || "{}");
  console.log(user)
  return (
    <>
    <nav
       className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <i className="h-8 w-8 text-[#FF9A76] transform group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-bounce" />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                PawParadise
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "Pets", path: "/pets" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
              // { name: 'Register', path: '/register' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative ${
                  location.pathname === item.path
                    ? "text-[#FF9A76] font-semibold"
                    : "text-[#6D4C41] hover:text-[#FF9A76]"
                } transition-colors duration-200`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-600 to-green-300 rounded-full" />
                )}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative text-[#6D4C41] hover:text-[#FF9A76]"
                >
                  <ShoppingCart className="w-6 h-6" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </button>
            {user.name ? (
              <>
                <div className="text-white hover:text-[#FF9A76]">
                    
                    <UserProfileDropdown />
                    </div>
                <button disabled={isLoading} onClick={logoutHandler} className=" hover:text-[#FF9A76]" type="button">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className=" hover:text-[#FF9A76]">
                  Login
                </Link>
                <Link to="/register" className=" hover:text-[#FF9A76]">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
    < Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

    </>

  );
};

export default Nav;

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   // const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const location = useLocation();
//   // const {  user, signOut } = useAuthStore();
//   const cartItems = useCartStore((state) => state.items);
//   const { user } = useUser();
//   React.useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <nav
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           isScrolled
//             ? "bg-white/95 backdrop-blur-sm shadow-lg"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <Link to="/" className="flex items-center group">
//                 <div className="relative">
//                   <PawPrint className="h-8 w-8 text-[#FF9A76] transform group-hover:rotate-12 transition-transform duration-300" />
//                   <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-bounce" />
//                 </div>
//                 <span className="ml-2 text-xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
//                   PawParadise
//                 </span>
//               </Link>
//             </div>

//             <div className="flex items-center space-x-8">
//               {[
//                 { name: "Home", path: "/" },
//                 { name: "Pets", path: "/pets" },
//                 { name: "Services", path: "/moreService" },
//                 { name: "Contact", path: "/contact" },
//                 // { name: 'Register', path: '/register' },
//               ].map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`relative ${
//                     location.pathname === item.path
//                       ? "text-[#FF9A76] font-semibold"
//                       : "text-[#6D4C41] hover:text-[#FF9A76]"
//                   } transition-colors duration-200`}
//                 >
//                   {item.name}
//                   {location.pathname === item.path && (
//                     <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-600 to-green-300 rounded-full" />
//                   )}
//                 </Link>
//               ))}

//               <div className="flex items-center space-x-4">
//                 <button
//                   onClick={() => setIsCartOpen(true)}
//                   className="relative text-[#6D4C41] hover:text-[#FF9A76]"
//                 >
//                   <ShoppingCart className="w-6 h-6" />
//                   {cartItems.length > 0 && (
//                     <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                       {cartItems.length}
//                     </span>
//                   )}
//                 </button>

//                 {/* <Link to="/register" className="hover:text-red-500">
//                   Register
//                 </Link> */}
//                 {user.username ? (
//                   <div className="text-white hover:text-[#FF9A76]">

//                     <UserProfileDropdown />

//                     {/* <button onClick={logout} className="ml-4">Logout</button> */}
//                     {/* <button  className="ml-4">
//                       <a href="/">Logout</a>
//                     </button> */}
//                   </div>
//                 ) : (
//                   <>
//                     <Link to="/login" className=" hover:text-[#FF9A76]">
//                       Login
//                     </Link>
//                     <Link to="/register" className=" hover:text-[#FF9A76]">
//                       Register
//                     </Link>
//                   </>
//                 )}

//                 {/* {
//                       email ? (
//                         <div className="text-white hover:text-gray-300">{username}
//                             <button onClick={logout} className="ml-4">Logout</button>
//                         </div>
//                     ) : (
//                       <button
//                       onClick={() => setIsAuthModalOpen(true)}
//                       className="flex items-center space-x-2 text-[#6D4C41] hover:text-[#FF9A76]"
//                     >
//                       <UserCircle className="w-6 h-6" />

//                       <span>yanyan</span>
//                     </button>
//                     )
//                 } */}

//                 {/*
//                  */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* <AuthModal
//         isOpen={isAuthModalOpen}
//         onClose={() => setIsAuthModalOpen(false)}
//       /> */}

//       < Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
//     </>
//   );
// }
