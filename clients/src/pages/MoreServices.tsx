import React, { useState } from "react";
import {
  Calendar,
  Clock,
  DollarSign,
  Scissors,
  Briefcase,
  Stethoscope,
  Home,
  Dog,
} from "lucide-react";
import axios from "axios";
import PetIconsBackground from "../components/PetIconsBackground";
// import { Service, BookingFormData, Booking } from '../types';

const MoreService = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingData, setBookingData] = useState({
    serviceId: 0,
    petName: "",
    petType: "dog",
    date: "",
    time: "",
    notes: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agreeToTerms: false,
  });

  // Mock data for services
  const services = [
    {
      id: 1,
      name: "Basic Grooming",
      description:
        "Bath, brush, nail trim, ear cleaning, and basic haircut for your pet.",
      price: 45,
      duration: "1 hour",
      category: "grooming",
      imageUrl:
        "/photo-1516734212186-a967f81ad0d7.png",
    },
    {
      id: 2,
      name: "Premium Grooming",
      description:
        "Includes everything in basic grooming plus specialized styling, teeth brushing, and paw treatment.",
      price: 75,
      duration: "1.5 hours",
      category: "grooming",
      imageUrl:
        "/photo-1581888227599-779811939961.png",
    },
    {
      id: 3,
      name: "Basic Obedience Training",
      description:
        "One-on-one training session focusing on basic commands like sit, stay, come, and leash walking.",
      price: 60,
      duration: "45 minutes",
      category: "training",
      imageUrl:
        "/photo-1587300003388-59208cc962cb.png",
    },
    {
      id: 4,
      name: "Advanced Training Package",
      description:
        "Series of 5 sessions covering advanced commands, behavior modification, and socialization.",
      price: 250,
      duration: "5 x 45 minutes",
      category: "training",
      imageUrl:
        "/photo-1551730459-92db2a308d6a.png",
    },
    {
      id: 5,
      name: "Wellness Exam",
      description:
        "Comprehensive health check including weight, temperature, heart, lungs, ears, and eyes.",
      price: 65,
      duration: "30 minutes",
      category: "veterinary",
      imageUrl:
        "/photo-1612349317150-e413f6a5b16d.png",
    },
    {
      id: 6,
      name: "Vaccination Visit",
      description:
        "Administration of core vaccines with brief health assessment.",
      price: 45,
      duration: "20 minutes",
      category: "veterinary",
      imageUrl:
        "/photo-1628009368231-7bb7cfcb0def.png",
    },
    {
      id: 7,
      name: "Overnight Boarding",
      description:
        "Safe and comfortable overnight stay with feeding, walks, and playtime.",
      price: 40,
      duration: "per night",
      category: "boarding",
      imageUrl:
        "/photo-1541599540903-216a46ca1dc0.png",
    },
    {
      id: 8,
      name: "Full Day Daycare",
      description:
        "Supervised play, socialization, and care during business hours.",
      price: 30,
      duration: "full day",
      category: "daycare",
      imageUrl:
        "/photo-1548199973-03cce0bbc87b.png",
    },
  ];

  // Mock data for upcoming bookings
  const upcomingBookings = [
    {
      id: 101,
      serviceId: 1,
      serviceName: "Basic Grooming",
      petName: "Max",
      petType: "Dog",
      date: "2025-06-15",
      time: "10:00 AM",
      status: "confirmed",
      price: 45,
    },
    {
      id: 102,
      serviceId: 5,
      serviceName: "Wellness Exam",
      petName: "Luna",
      petType: "Cat",
      date: "2025-06-20",
      time: "2:30 PM",
      status: "pending",
      price: 65,
    },
  ];

  const getCategoryIcon = (category, size = 24) => {
    switch (category) {
      case "grooming":
        return <Scissors size={size} className="text-pink-500" />;
      case "training":
        return <Briefcase size={size} className="text-blue-500" />;
      case "veterinary":
        return <Stethoscope size={size} className="text-green-500" />;
      case "boarding":
        return <Home size={size} className="text-purple-500" />;
      case "daycare":
        return <Dog size={size} className="text-orange-500" />;
      default:
        return null;
    }
  };

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

      // const handleSubmit = async (e) => {
      //   e.preventDefault();
      //   // onSubmit(formData);
      //   try {
      //         const res = await axios.post(
      //           "http://localhost:3000/api/v1/order",
      //           formData
      //         );
      //       //   setIsLogin(true)
      //         console.log(formData);
      //         alert(res.data.message);
      //       } catch (error) {
      //         alert("Error: " + error);
      //       }
      // };

  const handleBookService = (service) => {
    setSelectedService(service);
    setBookingData((prev) => ({
      ...prev,
      serviceId: service.id,
    }));
    setShowBookingForm(true);
    window.scrollTo(0, 0);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = e.target.checked;
      setBookingData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setBookingData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // const handleChange = (e) => {
  //   setPet({ ...pet, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:3000/api/v1/admin/petCreate",
  //       pet
  //     );
  //   //   setIsLogin(true)
      
  //     alert(res.data.message);
  //   } catch (error) {
  //     alert("Error: " + error);
  //   }
  // };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
          const res = await axios.post(
            "http://localhost:3000/api/v1/moreService",bookingData
            
          );
        //   setIsLogin(true)
        console.log("Booking submitted:", bookingData);
        setBookingConfirmed(true);
        setShowBookingForm(false);
          alert(res.data.message);
        } catch (error) {
          alert("Error: " + error);
        }
    
  };

  const resetBooking = () => {
    setBookingConfirmed(false);
    setSelectedService(null);
    setShowBookingForm(false);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-[#FFF5E1] relative">
      <PetIconsBackground color="pink" density="normal" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div>
          {bookingConfirmed ? (
            <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto text-center">
              <div className="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#8A9B6E] mb-4">
                Booking Confirmed!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your appointment for {selectedService?.name} has been scheduled.
                We've sent a confirmation email with all the details.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Appointment Details:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Calendar size={18} className="text-gray-500 mr-2" />
                    <span>Date: {bookingData.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="text-gray-500 mr-2" />
                    <span>Time: {bookingData.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Dog size={18} className="text-gray-500 mr-2" />
                    <span>
                      Pet: {bookingData.petName} ({bookingData.petType})
                    </span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={18} className="text-gray-500 mr-2" />
                    <span>Price: ${selectedService?.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={resetBooking}
                className="bg-[#FF9A76] text-white px-6 py-3 rounded-md font-medium hover:bg-[#ff7f50] transition-colors"
              >
                Return to Services
              </button>
            </div>
          ) : showBookingForm ? (
            <div>
              <button
                onClick={() => setShowBookingForm(false)}
                className="mb-4 flex items-center text-[#FF9A76] hover:text-[#ff885d]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to services
              </button>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                    <img
                      src={selectedService?.imageUrl}
                      alt={selectedService?.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex items-center mb-2">
                      {selectedService &&
                        getCategoryIcon(selectedService.category)}
                      <h2 className="text-2xl font-bold text-[#8A9B6E] ml-2">
                        {selectedService?.name}
                      </h2>
                    </div>
                    <div className="flex items-center mb-3">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm mr-2 capitalize">
                        {selectedService?.category}
                      </span>
                      <span className="flex items-center text-gray-600 text-sm mr-3">
                        <Clock size={14} className="mr-1" />
                        {selectedService?.duration}
                      </span>
                      <span className="flex items-center text-gray-800 font-semibold">
                        <DollarSign size={16} className="mr-1" />
                        {selectedService?.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {selectedService?.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-[#8A9B6E] mb-6">
                  Book Your Appointment
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Appointment Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="petName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Pet Name *
                        </label>
                        <input
                          type="text"
                          id="petName"
                          name="petName"
                          value={bookingData.petName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="petType"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Pet Type *
                        </label>
                        <select
                          id="petType"
                          name="petType"
                          value={bookingData.petType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="dog">Dog</option>
                          <option value="cat">Cat</option>
                          <option value="bird">Bird</option>
                          <option value="small-animal">Small Animal</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="date"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={bookingData.date}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="time"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={bookingData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="">Select a time</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="notes"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Special Instructions or Notes
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={bookingData.notes}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Any special requirements or information we should know about your pet"
                      ></textarea>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={bookingData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={bookingData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={bookingData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={bookingData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={bookingData.agreeToTerms}
                        onChange={handleInputChange}
                        required
                        className="h-4 w-4 mt-1 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        I understand that I must arrive 10 minutes before my
                        appointment time. Cancellations must be made at least 24
                        hours in advance to avoid a cancellation fee. I agree to
                        provide proof of vaccinations for my pet if requested. *
                      </span>
                    </label>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={!bookingData.agreeToTerms}
                      className={`px-6 py-3 rounded-md font-medium ${
                        bookingData.agreeToTerms
                          ? "bg-[#FF9A76] text-white hover:bg-[#df7650]"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      } transition-colors`}
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div>
              <div className=" bg-[#8A9B6E] text-white rounded-lg shadow-xl overflow-hidden mb-8">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Professional Pet Services
                    </h2>
                    <p className="text-indigo-100 text-lg mb-6">
                      From grooming to training, veterinary care to boarding, we
                      offer a wide range of professional services for your
                      beloved pets.
                    </p>
                    <div className="bg-white/10 rounded-lg p-4 mb-4">
                      <p className="text-white">
                        <span className="font-semibold">
                          Book online and save 10%
                        </span>{" "}
                        on your first service appointment!
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src="../public/frame1.png"
                      alt="Pet grooming service"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Our Services
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`px-4 py-2 rounded-md ${
                      activeCategory === "all"
                        ? "bg-[#FF9A76] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    All Services
                  </button>
                  <button
                    onClick={() => setActiveCategory("grooming")}
                    className={`px-4 py-2 rounded-md flex items-center ${
                      activeCategory === "grooming"
                        ? "bg-[#FF9A76] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    <Scissors size={16} className="mr-1" />
                    Grooming
                  </button>
                  <button
                    onClick={() => setActiveCategory("training")}
                    className={`px-4 py-2 rounded-md flex items-center ${
                      activeCategory === "training"
                        ? "bg-[#FF9A76] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    <Briefcase size={16} className="mr-1" />
                    Training
                  </button>
                  <button
                    onClick={() => setActiveCategory("veterinary")}
                    className={`px-4 py-2 rounded-md flex items-center ${
                      activeCategory === "veterinary"
                        ? "bg-[#FF9A76] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    <Stethoscope size={16} className="mr-1" />
                    Veterinary
                  </button>
                  <button
                    onClick={() => setActiveCategory("boarding")}
                    className={`px-4 py-2 rounded-md flex items-center ${
                      activeCategory === "boarding"
                        ? "bg-[#FF9A76] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    <Home size={16} className="mr-1" />
                    Boarding
                  </button>
                  <button
                    onClick={() => setActiveCategory("daycare")}
                    className={`px-4 py-2 rounded-md flex items-center ${
                      activeCategory === "daycare"
                        ? "bg-[#FF9A76] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    <Dog size={16} className="mr-1" />
                    Daycare
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((service) => (
                    <div
                      key={service.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative h-48">
                        <img
                          src={service.imageUrl}
                          alt={service.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                          {getCategoryIcon(service.category, 20)}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-[#8A9B6E] mb-1">
                          {service.name}
                        </h3>
                        <div className="flex items-center mb-2">
                          <span className="text-gray-600 text-sm mr-3 flex items-center">
                            <Clock size={14} className="mr-1" />
                            {service.duration}
                          </span>
                          <span className="font-semibold text-gray-800 flex items-center">
                            <DollarSign size={16} className="mr-1" />
                            {service.price.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {service.description}
                        </p>
                        <button
                        
                          onClick={() => handleBookService(service)}
                          className="w-full bg-[#FF9A76] text-white py-2 rounded-md font-medium hover:bg-[#ff8356] transition-colors"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* {upcomingBookings.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Your Upcoming Appointments
                  </h2>
                  <div className="space-y-4">
                    {upcomingBookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="mb-3 md:mb-0">
                            <h3 className="text-lg font-semibold text-gray-800">
                              {booking.serviceName}
                            </h3>
                            <p className="text-gray-600">
                              For {booking.petName} ({booking.petType})
                            </p>
                          </div>
                          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                            <div className="flex items-center mb-2 md:mb-0">
                              <Calendar
                                size={16}
                                className="text-gray-500 mr-1"
                              />
                              <span className="text-gray-700">
                                {formatDate(booking.date)}
                              </span>
                            </div>
                            <div className="flex items-center mb-2 md:mb-0">
                              <Clock size={16} className="text-gray-500 mr-1" />
                              <span className="text-gray-700">
                                {booking.time}
                              </span>
                            </div>
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(
                                booking.status
                              )}`}
                            >
                              {booking.status.charAt(0).toUpperCase() +
                                booking.status.slice(1)}
                            </span>
                          </div>
                        </div>
                        <div className="mt-3 flex justify-end space-x-3">
                          <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                            Reschedule
                          </button>
                          <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                            Cancel
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )} */}

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Service Policies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Booking & Cancellation
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          Appointments must be booked at least 24 hours in
                          advance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          Cancellations with less than 24 hours notice may incur
                          a fee
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          Please arrive 10 minutes before your scheduled
                          appointment
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          Late arrivals may result in shortened service time
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Health & Safety
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>All pets must be up-to-date on vaccinations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          Please inform us of any health issues or behavioral
                          concerns
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          We reserve the right to refuse service if a pet poses
                          a safety risk
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          Special accommodations can be made for senior or
                          special needs pets
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreService;
