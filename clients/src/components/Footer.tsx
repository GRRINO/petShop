import { PawPrint, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" bg-[#6D4C41]">
      <div className=" py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <PawPrint className="h-8 w-8 text-[#FF9A76]" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                PawParadise
              </span>
            </div>
            <p className="mt-4 text-white">Making tails wag and hearts purr since 2024 🐾</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-[#FF9A76] tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/" className="text-white hover:text-[#FF9A76] transition-colors duration-200 flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="/pets" className="text-white hover:text-[#FF9A76] transition-colors duration-200 flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Pets
                </a>
              </li>
              <li>
                <a href="/services" className="text-white hover:text-[#FF9A76] transition-colors duration-200 flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-[#FF9A76] transition-colors duration-200 flex items-center">
                  <Heart className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#FF9A76] tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-white flex items-center">
                <span className="w-2 h-2 bg-[#83eea2] rounded-full mr-2"></span>
                Pet Adoption
              </li>
              <li className="text-white flex items-center">
                <span className="w-2 h-2 bg-[#FF9A76] rounded-full mr-2"></span>
                Veterinary Care
              </li>
              <li className="text-white flex items-center">
                <span className="w-2 h-2 bg-[#83eea2] rounded-full mr-2"></span>
                Grooming
              </li>
              <li className="text-white flex items-center">
                <span className="w-2 h-2 bg-[#FF9A76] rounded-full mr-2"></span>
                Training
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#FF9A76] tracking-wider uppercase">Contact Info</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center text-white">
                <MapPin className="h-5 w-5 mr-2 text-[#83eea2]" />
                123 Pet Street, Pawville
              </li>
              <li className="flex items-center text-white">
                <Phone className="h-5 w-5 mr-2 text-[#FF9A76]" />
                (+95) 998-888-742
              </li>
              <li className="flex items-center text-white">
                <Mail className="h-5 w-5 mr-2 text-[#83eea2]" />
                info@pawparadise.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-purple-100 pt-8">
          <p className="text-center text-gray-400">Made with <Heart className="w-4 h-4 inline-block text-pink-500" /> by PawParadise</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer