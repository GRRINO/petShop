import  { useState } from "react";
import { MapPin, Phone, Mail, Clock, } from "lucide-react";
import axios from "axios";
import PetIconsBackground from "../components/PetIconsBackground";

export default function Contact() {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    subject:"",
    message:"",
  });
  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = e.target.checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
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


  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // onSubmit(formData);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/content",
        formData
      );
      //   setIsLogin(true)
      console.log(formData);
      alert(res.data.message);
    } catch (error) {
      alert("Error: " + error);
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-[#FFF5E1] relative">
      <PetIconsBackground color="purple" density="low" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#8A9B6E]">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="card-cute bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#FF9A76] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold ">Address</h3>
                  <p className="text-gray-600"> 123 Pet Street, Pawville</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-[#FF9A76] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">(+95) 998-888-742</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[#FF9A76] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">info@pawparadise.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-[#FF9A76] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p className="text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sun: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-cute bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <h2 className="text-2xl  font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" w-full bg-[#FF9A76] hover:bg-[#ff7e50] text-white py-3 px-4 rounded-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
