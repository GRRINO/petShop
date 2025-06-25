import { Link } from 'react-router-dom';
import { PlusCircle, List } from 'lucide-react';
import PetIconsBackground from '../components/PetIconsBackground';

export default function Dashboard() {
  return (
    <div className=' pt-20 p-5 min-h-screen'>
            <PetIconsBackground color="purple" density="high" />
      
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/admin/petCreate"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
              <PlusCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Add New Pet</h3>
              <p className="text-gray-600">Create a new pet listing</p>
            </div>
          </div>
        </Link>

        <Link
          to="/admin/dashBoard/pets"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
              <List className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">View All Pets</h3>
              <p className="text-gray-600">Manage your pet listings</p>
            </div>
          </div>
        </Link>

        <Link
          to="/admin/dashBoard/order"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
              <List className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">View Pets Orders</h3>
              <p className="text-gray-600">Manage your pet listings</p>
            </div>
          </div>
        </Link>

        
        {/* <Link
          to="/service"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
              <List className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">View Service Orders</h3>
              <p className="text-gray-600">Manage your service listings</p>
            </div>
          </div>
        </Link>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-50 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Quick Stats</h3>
              <p className="text-gray-600">View your shop statistics</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}