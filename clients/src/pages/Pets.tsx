import { useState } from "react";
import { Heart, Search, SortDesc, Filter, Info, ShoppingCart, Tag, Loader2 } from "lucide-react";
import { useGetPetDataQuery } from "../slices/userApi";
import useCartStore from "../store/cartStore";
import PetIconsBackground from "../components/PetIconsBackground";


const sortOptions = [
  { value: "favorites", label: "Favorites" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "age-asc", label: "Age: Youngest First" },
  { value: "age-desc", label: "Age: Oldest First" }
];

const petCategories = ["All", "dog", "cat", "Bird", "Other"]; // Example categories

export default function Pets() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("favorites");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPet, setSelectedPet] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addItem } = useCartStore();

  const { data, error, isLoading } = useGetPetDataQuery();

  const pets = data?.petInfo || [];

  const toggleFavorite = (petId: string) => {
    setFavorites((prev) =>
      prev.includes(petId)
        ? prev.filter((id) => id !== petId)
        : [...prev, petId]
    );
  };

 
  const getFilteredAndSortedPets = () => {
  let filteredPets = pets
    // ✅ Exclude pets with quantity === 0
    .filter((pet: any) => pet.quantity > 0);

  // ✅ Filter by category
  if (activeCategory !== "All") {
    filteredPets = filteredPets.filter(
      (item: any) => item.category === activeCategory
    );
  }

  // ✅ Filter by search query
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredPets = filteredPets.filter(
      (pet: any) =>
        pet.name.toLowerCase().includes(query) ||
        pet.breed.toLowerCase().includes(query)
    );
  }

  // ✅ Sorting
  return [...filteredPets].sort((a, b) => {
    switch (sortBy) {
      case "favorites":
        const aFav = favorites.includes(a._id);
        const bFav = favorites.includes(b._id);
        if (aFav === bFav) return a.name.localeCompare(b.name);
        return bFav ? 1 : -1;
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "age-asc":
        return a.age - b.age;
      case "age-desc":
        return b.age - a.age;
      default:
        return 0;
    }
  });
};


  const handleAdopt = (pet:any) => {
    addItem(pet);
    // setIsCartOpen(true);
  };

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error loading pets</p>;

  return (
    <div className=" min-h-screen pt-16 bg-[#FFF5E1]">
      <PetIconsBackground color="pink" density="normal" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 md:mb-0 text-[#8A9B6E]">
            Find Your Perfect Friend 🐾
          </h1>
          <div className="flex items-center space-x-2">
            <Heart className={`w-6 h-6 ${favorites.length > 0 ? "text-pink-500" : "text-gray-400"}`} />
            <span className="text-gray-600">{favorites.length} favorites</span>
          </div>
        </div>

        {/* Filters */}
        <div className=" bg-white rounded-xl shadow-md p-4 mb-8">
          <div className=" z-30 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search pets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="relative">
              <SortDesc className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                {petCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Pet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {getFilteredAndSortedPets().map((pet) => (
    <div
      key={pet._id}
      className=" z-30 bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
      onClick={() => setSelectedPet(pet)}
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-[220px] mx-auto h-64 object-cover"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(pet._id);
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-pink-50"
        >
          <Heart
            className={`w-6 h-6 ${
              favorites.includes(pet._id)
                ? "text-pink-500 fill-current"
                : "text-gray-400"
            }`}
          />
        </button>
        <div className="absolute bottom-4 left-4 bg-[#8A9B6E] text-white px-3 py-1 rounded-full text-sm font-medium">
          ${pet.price}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 bg-[#fcd8cb] flex flex-col flex-1">
        {/* Main Info */}
        <div className="flex-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">{pet.name}</h3>
              <p className="text-slate-800">{pet.breed}</p>
            </div>
            {/* <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">
              {pet.gender}
            </span> */}
          </div>

          <div className="space-y-2 text-slate-800 text-sm mb-4">
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-2" />
              Age: {pet.age}
            </div>
            <p>{pet.description}</p>
          </div>
        </div>

        {/* Buttons Fixed to Bottom */}
        <div className="flex space-x-2 mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPet(pet);
            }}
            className="flex-1 flex items-center justify-center outline-[#E07A5F] border bg-white border-[#E07A5F] text-[#E07A5F] hover:bg-[#E07A5F] hover:text-white py-2 rounded-lg"
          >
            <Info className="w-4 h-4 mr-2" />
            More Info
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAdopt(pet);
              setIsCartOpen(true);
            }}
            className="flex-1 flex items-center justify-center bg-[#E07A5F] text-white py-2 rounded-lg hover:bg-[#ff7e5a]"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Adopt Now
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


        {
          (isLoading) ? (<div className="text-center py-12">
            <p className=" text-gray-600 text-lg ">Loading...</p>
            {/* <Loader2/> */}
          </div>): (getFilteredAndSortedPets().length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No pets found matching your criteria 😢</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSortBy("favorites");
                setSearchQuery("");
              }}
              className="mt-4 text-purple-500 hover:text-purple-600"
            >
              Clear filters
            </button>
          </div>
        ))
          
        }
      </div>
    </div>
  );
}
