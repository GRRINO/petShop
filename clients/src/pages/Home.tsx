import { ArrowRight, Gift, Heart, Scissors, Shield, Star } from "lucide-react";
import PetIconsBackground from "../components/PetIconsBackground";
import { useEffect, useState } from "react";

const features = [
  {
    icon: Heart,
    title: "Loving Care",
    description: "Cuddles and care for every pet",
    color: "bg-pink-100",
  },
  {
    icon: Shield,
    title: "Safe & Sound",
    description: "Your pet's safety is our priority",
    color: "bg-purple-100",
  },
  {
    icon: Star,
    title: "Happy Pets",
    description: "Bringing joy to furry friends",
    color: "bg-yellow-100",
  },
];

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1200&h=600",
    title: "Your pet,",
    subtitle: "our priority",
    description: "Happy golden retriever with owner",
    cta: "Find Your Friend",
  },
  {
    image:
      "https://images.unsplash.com/photo-1577175889968-f551f5944abd?auto=format&fit=crop&q=80&w=1200&h=600",
    title: "Professional",
    subtitle: "grooming services",
    description: "Cute puppy getting groomed",
    cta: "Book Now",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&q=80&w=1200&h=600",
    title: "Expert",
    subtitle: "veterinary care",
    description: "Veterinarian examining a cat",
    cta: "Learn More",
  },
];

const testimonials = [
  {
    name: "Sarah & Luna",
    text: "Found my perfect furry friend here! Luna brings so much joy to our family 🐾",
    image:
      "/photo-1438761681033-6461ffad8d80.png",
    petImage:
      "/photo-1537151625747-768eb6cf92b2.png",
  },
  {
    name: "Mike & Buddy",
    text: "The grooming service is pawsome! Buddy always comes back so happy 🐶",
    image:
      "/photo-1500648767791-00dcc994a43e.png",
    petImage:
      "/photo-1543466835-00a7907e9de1.png",
  },
  {
    name: "Emily & Whiskers",
    text: "Best pet shop ever! Whiskers loves all the toys we get here 😺",
    image:
      "/photo-1494790108377-be9c29b29330.png",
    petImage:
      "/photo-1533738363-b7f9aef128ce.png",
  },
];


const petTypes = [
  {
    // icon: Bone,
    image: "/Frame 31.png",
    name: "Dogs",
    count: "70+ Breeds",
    color: "bg-orange-200",
  },
  {
    // icon: Cat,
    image: "/Frame 36.png",

    name: "Cats",
    count: "32+ Breeds",
    color: "bg-blue-100",
  },
  {
    // icon: Guinea Pig,
    image: "/Frame 33.png",

    name: "Guinea Pig",
    count: "5+ Species",
    color: "bg-green-100",
  },
];
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

   useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

      return (
    <div className="min-h-screen relative">
      <PetIconsBackground color="purple" density="high" />



      <div className=" py-14 h-screen  overflow-hidden bg-[#FFF5E1]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10  py-12 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl z-10">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#8A9B6E] sm:text-5xl lg:text-6xl">
                One More Friend
              </h1>
              <h2 className="mb-6 text-3xl font-bold text-[#8A9B6E] sm:text-4xl">
                Thousands More Fun!
              </h2>
              <p className="mb-8 max-w-lg text-lg text-[#8A9B6E]/80">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  // variant="outline"bg-[#E07A5F]
                  className=" box-border px-4 py-2 rounded-md  outline outline-[#E07A5F] group border-[#E07A5F] text-[#E07A5F] hover:bg-[c] hover:text-[#E07A5F]"
                >
                  View Intro
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
                <button className="bg-[#E07A5F] box-border outline outline-[#E07A5F] border-[#E07A5F] px-4 py-2 rounded-md text-white hover:text-[#E07A5F] hover:bg-[#FFF5E1]/90">
                  <a href="/pets">Explore Now</a>
                </button>
              </div>
            </div>

            <div className=" relative z-20 bottom-11">
              <div className=" relative h-[500px] w-full">
                <img
                  className=" object-contain"
                  src="/pey.png"
                  alt=""
                />
              </div>
            </div>

            {/* <div className="relative">
              <div className="relative h-[500px] w-full">
                <image
                  src=".\public\pey.png"
                  alt="Happy person with a corgi dog"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div> */}
          </div>
          <div className="absolute  left-0 top-0 h-64 w-64 rounded-full bg-[#FFE4BC] blur-3xl"></div>
          <div className="absolute z-10 bottom-0 right-0 h-96 w-96 rounded-full bg-[#FFE4BC] blur-3xl"></div>
        </div>
        {/* Background decorative shapes */}
      </div>

      <div>
        <div className=" py-14 h-screen  overflow-hidden bg-[#FFF5E1]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10  py-12 lg:py-20">
            <div className="mb-12 relative overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-200 opacity-90"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300 rounded-full opacity-20"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-20"></div>
              </div>
              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <div className="inline-block bg-white text-[#E07A5F] px-4 py-1 rounded-full text-sm font-bold mb-4">
                    PAWSOME DEAL!
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Summer Adoption Special
                  </h2>
                  <p className="text-white text-lg mb-6">
                    Adopt any pet during June and receive a complimentary
                    starter kit including premium food, toys, and a free first
                    vet checkup!
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center bg-white bg-opacity-30 px-4 py-2 rounded-full">
                      <Gift className="text-[#E07A5F] mr-2" size={20} />
                      <span className="text-[#E07A5F]">Free Starter Kit</span>
                    </div>
                    <div className="flex items-center bg-white bg-opacity-30 px-4 py-2 rounded-full">
                      <Scissors className="text-[#E07A5F] mr-2" size={20} />
                      <span className="text-[#E07A5F]">First Grooming Free</span>
                    </div>
                    <div className="flex items-center bg-white bg-opacity-30 px-4 py-2 rounded-full">
                      <Star className="text-[#E07A5F] mr-2" size={20} />
                      <span className="text-[#E07A5F]">Priority Support</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 relative">
                  <div className="bg-white p-2 rounded-full shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img
                      src="/photo-1583511655857-d19b40a7a54e.png"
                      alt="Happy dog with adoption kit"
                      className="w-full h-auto rounded-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-[#ff6969] text-white font-bold p-4 rounded-full shadow-lg transform rotate-12">
                    <span className="text-xl">50% OFF</span>
                  </div>
                </div>
              </div>
              <div className=" relative">
                <div className="  py-4 px-8 flex justify-between items-center">
                  <div className="text-white">
                    <span className="font-bold">Offer ends:</span> May 30, 2025
                  </div>
                  <button
                    onClick={() =>("pets")}
                    className="flex items-center bg-[#E07A5F]  text-white from-teal-400 to-cyan-500  px-6 py-3 rounded-full font-medium hover:from-teal-500 hover:to-cyan-600 transition-all shadow-md"
                  >
                    <span>Adopt Now</span>
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" h-40 absolute">
        
      </div> */}

      {/* <div className=" absolute">
        <img src="/Frame 23.png" alt="" />
      </div>
      <div className=" absolute left-[1200px]">
        <img src="/Frame 24.png" alt="" />
      </div> */}

      <div className="py-16 bg-[#FFF5E1] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#8A9B6E]">
            Meet Our Furry Friends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {petTypes.map((type, index) => (
              <div
                key={index}
                className={`${type.color} rounded-2xl p-8  text-center transform hover:-translate-y-1 transition-transform duration-300`}
              >
                {/* <type.icon className="w-16 h-16 mx-auto mb-4 text-gray-700" /> */}
                <img src={type.image} className=" " alt="" />
                <h3 className="text-xl text-[#E07A5F] font-semibold mt-5 mb-2">{type.name}</h3>
                <p className="text-gray-600">{type.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" py-16  bg-[#FFF5E1] ">
        <div className=" flex justify-center gap-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="   w-[608px] relative ">
            <img src="/p1.png" alt="" />
          </div>

          <div className="   w-[608px] relative  rounded-md">
            <div className=" flex">
              <div className="w-[304px] bg-white p-6 flex flex-col justify-center ">
                <h2 className="text-xl  md:text-2xl font-bold text-[#8A9B6E] mb-2">
                  PET EXPRESSIONS
                </h2>
                <p className="text-gray-500 mb-4 text-sm md:text-base">
                  Add instant sparkle to your pet's coat!
                </p>
                <a
                  href="#"
                  className="text-[#E07A5F] font-medium hover:text-amber-500 transition-colors"
                >
                  LEARN MORE
                </a>
              </div>
              <div className=" w-[304px] ">
                <img src="/p2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-end gap-5 max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="   w-[608px] relative  rounded-md">
            <div className=" flex">
            <div className="w-[304px] bg-white p-6 flex flex-col justify-center ">
                <h2 className="text-xl  md:text-2xl font-bold text-[#8A9B6E] mb-2">
                PUT YOUR PET IN THE GAME
                </h2>
                <p className="text-gray-500 mb-4 text-sm md:text-base">
                A comfy way to dream of big wins for your favorite team
                </p>
                <a
                  href="#"
                  className="text-[#E07A5F] font-medium hover:text-amber-500 transition-colors"
                >
                  LEARN MORE
                </a>
              </div>
              <div className=" w-[304px] ">
                <img src="/p4.png" alt="" />
              </div>
            </div>
          </div>
          <div className="   w-[608px] relative ">
            <img src="/p3.png" alt="" />
          </div>
        </div>
      </div>

      <div className="py-16 bg-[#FFF5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} rounded-2xl p-8 text-center transform hover:-translate-y-1 transition-transform duration-300`}
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-gray-700" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* from-pink-50 to-purple-50 */}
      <div className="py-16 bg-gradient-to-b bg-[#FFF5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#8A9B6E] text-center mb-12">
            Happy Families
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex justify-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-pink-100"
                  />
                  <img
                    src={testimonial.petImage}
                    alt="Pet"
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-100"
                  />
                </div>
                <p className="text-gray-600 text-center mb-4">
                  {testimonial.text}
                </p>
                <p className="font-semibold text-center text-[#E07A5F]">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-gradient-to-r bg-[#FFF5E1]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl text-[#8A9B6E] font-bold mb-4">
            Ready to Meet Your New Best Friend?
          </h2>
          <p className="text-gray-600 mb-8">
            Visit us today and find your perfect companion! 🐾
          </p>
          <button className="bg-[#E07A5F] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#bd5c41] transform hover:-translate-y-1 transition-all duration-300">
            Visit Our Pet Family
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default Home


// export default function Home() {
//   const [currentSlide, setCurrentSlide] = React.useState(0);



//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="min-h-screen relative">
//       <PetIconsBackground color="purple" density="high" />

//       {/* <div className="relative h-screen overflow-hidden bg-purple-50">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute w-full h-full transition-all duration-1000 ${
//               currentSlide === index 
//                 ? 'opacity-100 translate-x-0' 
//                 : 'opacity-0 translate-x-full'
//             }`}
//           >
//             <div className="grid grid-cols-2 h-full">
//               <div className="flex flex-col justify-center px-16">
//                 <h1 className="text-6xl font-bold mb-2 text-gray-800">
//                   {slide.title}
//                 </h1>
//                 <p className="text-4xl text-purple-600 mb-8">
//                   {slide.subtitle}
//                 </p>
//                 <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-all duration-300 w-fit flex items-center group">
//                   {slide.cta}
//                   <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
//                 </button>
//               </div>

//               <div className="relative">
//                 <div className="absolute inset-0 bg-purple-100 rounded-l-[80px] overflow-hidden">
//                   <img
//                     src={slide.image}
//                     alt={slide.description}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="absolute bottom-8 left-16 right-16">
//               <div className="flex items-center space-x-4">
//                 {slides.map((_, i) => (
//                   <div
//                     key={i}
//                     className="flex-1 h-1 rounded-full overflow-hidden bg-gray-200"
//                   >
//                     <div
//                       className={`h-full bg-pink-500 transition-all duration-500 ${
//                         currentSlide === i ? 'w-full' : 'w-0'
//                       }`}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="absolute bottom-8 right-16 flex space-x-4">
//           <button
//             onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
//             className="w-10 h-10 rounded-full border-2 border-purple-500 text-purple-500 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all duration-300"
//           >
//             ←
//           </button>
//           <button
//             onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
//             className="w-10 h-10 rounded-full border-2 border-purple-500 text-purple-500 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-all duration-300"
//           >
//             →
//           </button>
//         </div>
//       </div> */}

//       <div className=" py-14 h-screen  overflow-hidden bg-[#FFF5E1]">
//         <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10  py-12 lg:py-20">
//           <div className="grid items-center gap-12 lg:grid-cols-2">
//             <div className="max-w-2xl z-10">
//               <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#8A9B6E] sm:text-5xl lg:text-6xl">
//                 One More Friend
//               </h1>
//               <h2 className="mb-6 text-3xl font-bold text-[#8A9B6E] sm:text-4xl">
//                 Thousands More Fun!
//               </h2>
//               <p className="mb-8 max-w-lg text-lg text-[#8A9B6E]/80">
//                 Having a pet means you have more joy, a new friend, a happy
//                 person who will always be with you to have fun. We have 200+
//                 different pets that can meet your needs!
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <button
//                   // variant="outline"bg-[#E07A5F]
//                   className=" box-border px-4 py-2 rounded-md  outline outline-[#E07A5F] group border-[#E07A5F] text-[#E07A5F] hover:bg-[c] hover:text-[#E07A5F]"
//                 >
//                   View Intro
//                   <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
//                     →
//                   </span>
//                 </button>
//                 <button className="bg-[#E07A5F] box-border outline outline-[#E07A5F] border-[#E07A5F] px-4 py-2 rounded-md text-white hover:text-[#E07A5F] hover:bg-[#FFF5E1]/90">
//                   <a href="/pets">Explore Now</a>
//                 </button>
//               </div>
//             </div>

//             <div className=" relative z-20 bottom-11">
//               <div className=" relative h-[500px] w-full">
//                 <img
//                   className=" object-contain"
//                   src="/pey.png"
//                   alt=""
//                 />
//               </div>
//             </div>

//             {/* <div className="relative">
//               <div className="relative h-[500px] w-full">
//                 <image
//                   src=".\public\pey.png"
//                   alt="Happy person with a corgi dog"
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </div> */}
//           </div>
//           <div className="absolute  left-0 top-0 h-64 w-64 rounded-full bg-[#FFE4BC] blur-3xl"></div>
//           <div className="absolute z-10 bottom-0 right-0 h-96 w-96 rounded-full bg-[#FFE4BC] blur-3xl"></div>
//         </div>
//         {/* Background decorative shapes */}
//       </div>

//       <div>
//         <div className=" py-14 h-screen  overflow-hidden bg-[#FFF5E1]">
//           <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10  py-12 lg:py-20">
//             <div className="mb-12 relative overflow-hidden rounded-xl shadow-2xl">
//               <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-200 opacity-90"></div>
//               <div className="absolute top-0 left-0 w-full h-full">
//                 <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20"></div>
//                 <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300 rounded-full opacity-20"></div>
//                 <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-20"></div>
//               </div>
//               <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center">
//                 <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
//                   <div className="inline-block bg-white text-[#E07A5F] px-4 py-1 rounded-full text-sm font-bold mb-4">
//                     PAWSOME DEAL!
//                   </div>
//                   <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//                     Summer Adoption Special
//                   </h2>
//                   <p className="text-white text-lg mb-6">
//                     Adopt any pet during June and receive a complimentary
//                     starter kit including premium food, toys, and a free first
//                     vet checkup!
//                   </p>
//                   <div className="flex flex-wrap gap-4">
//                     <div className="flex items-center bg-white bg-opacity-30 px-4 py-2 rounded-full">
//                       <Gift className="text-white mr-2" size={20} />
//                       <span className="text-white">Free Starter Kit</span>
//                     </div>
//                     <div className="flex items-center bg-white bg-opacity-30 px-4 py-2 rounded-full">
//                       <Scissors className="text-white mr-2" size={20} />
//                       <span className="text-white">First Grooming Free</span>
//                     </div>
//                     <div className="flex items-center bg-white bg-opacity-30 px-4 py-2 rounded-full">
//                       <Star className="text-white mr-2" size={20} />
//                       <span className="text-white">Priority Support</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="md:w-1/3 relative">
//                   <div className="bg-white p-2 rounded-full shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
//                     <img
//                       src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
//                       alt="Happy dog with adoption kit"
//                       className="w-full h-auto rounded-full"
//                     />
//                   </div>
//                   <div className="absolute -bottom-4 -right-4 bg-[#ff6969] text-white font-bold p-4 rounded-full shadow-lg transform rotate-12">
//                     <span className="text-xl">50% OFF</span>
//                   </div>
//                 </div>
//               </div>
//               <div className=" relative">
//                 <div className="  py-4 px-8 flex justify-between items-center">
//                   <div className="text-white">
//                     <span className="font-bold">Offer ends:</span> May 30, 2025
//                   </div>
//                   <button
//                     onClick={() => setActiveTab("pets")}
//                     className="flex items-center bg-[#E07A5F]  text-white from-teal-400 to-cyan-500  px-6 py-3 rounded-full font-medium hover:from-teal-500 hover:to-cyan-600 transition-all shadow-md"
//                   >
//                     <span>Adopt Now</span>
//                     <ArrowRight size={18} className="ml-2" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className=" h-40 absolute">
        
//       </div> */}

//       {/* <div className=" absolute">
//         <img src="/Frame 23.png" alt="" />
//       </div>
//       <div className=" absolute left-[1200px]">
//         <img src="/Frame 24.png" alt="" />
//       </div> */}

//       <div className="py-16 bg-[#FFF5E1] ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12 text-[#8A9B6E]">
//             Meet Our Furry Friends
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {petTypes.map((type, index) => (
//               <div
//                 key={index}
//                 className={`${type.color} rounded-2xl p-8  text-center transform hover:-translate-y-1 transition-transform duration-300`}
//               >
//                 {/* <type.icon className="w-16 h-16 mx-auto mb-4 text-gray-700" /> */}
//                 <img src={type.image} className=" " alt="" />
//                 <h3 className="text-xl text-[#E07A5F] font-semibold mt-5 mb-2">{type.name}</h3>
//                 <p className="text-gray-600">{type.count}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className=" py-16  bg-[#FFF5E1] ">
//         <div className=" flex justify-center gap-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="   w-[608px] relative ">
//             <img src="/p1.png" alt="" />
//           </div>

//           <div className="   w-[608px] relative  rounded-md">
//             <div className=" flex">
//               <div className="w-[304px] bg-white p-6 flex flex-col justify-center ">
//                 <h2 className="text-xl  md:text-2xl font-bold text-[#8A9B6E] mb-2">
//                   PET EXPRESSIONS
//                 </h2>
//                 <p className="text-gray-500 mb-4 text-sm md:text-base">
//                   Add instant sparkle to your pet's coat!
//                 </p>
//                 <a
//                   href="#"
//                   className="text-[#E07A5F] font-medium hover:text-amber-500 transition-colors"
//                 >
//                   LEARN MORE
//                 </a>
//               </div>
//               <div className=" w-[304px] ">
//                 <img src="/p2.png" alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className=" flex justify-center items-end gap-5 max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
//           <div className="   w-[608px] relative  rounded-md">
//             <div className=" flex">
//             <div className="w-[304px] bg-white p-6 flex flex-col justify-center ">
//                 <h2 className="text-xl  md:text-2xl font-bold text-[#8A9B6E] mb-2">
//                 PUT YOUR PET IN THE GAME
//                 </h2>
//                 <p className="text-gray-500 mb-4 text-sm md:text-base">
//                 A comfy way to dream of big wins for your favorite team
//                 </p>
//                 <a
//                   href="#"
//                   className="text-[#E07A5F] font-medium hover:text-amber-500 transition-colors"
//                 >
//                   LEARN MORE
//                 </a>
//               </div>
//               <div className=" w-[304px] ">
//                 <img src="/p4.png" alt="" />
//               </div>
//             </div>
//           </div>
//           <div className="   w-[608px] relative ">
//             <img src="/p3.png" alt="" />
//           </div>
//         </div>
//       </div>

//       <div className="py-16 bg-[#FFF5E1]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`${feature.color} rounded-2xl p-8 text-center transform hover:-translate-y-1 transition-transform duration-300`}
//               >
//                 <feature.icon className="w-12 h-12 mx-auto mb-4 text-gray-700" />
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* from-pink-50 to-purple-50 */}
//       <div className="py-16 bg-gradient-to-b bg-[#FFF5E1]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-[#8A9B6E] text-center mb-12">
//             Happy Families
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
//               >
//                 <div className="flex justify-center gap-4 mb-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-16 h-16 rounded-full object-cover ring-4 ring-pink-100"
//                   />
//                   <img
//                     src={testimonial.petImage}
//                     alt="Pet"
//                     className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-100"
//                   />
//                 </div>
//                 <p className="text-gray-600 text-center mb-4">
//                   {testimonial.text}
//                 </p>
//                 <p className="font-semibold text-center text-[#E07A5F]">
//                   {testimonial.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="py-16 bg-gradient-to-r bg-[#FFF5E1]">
//         <div className="max-w-3xl mx-auto text-center px-4">
//           <h2 className="text-3xl text-[#8A9B6E] font-bold mb-4">
//             Ready to Meet Your New Best Friend?
//           </h2>
//           <p className="text-gray-600 mb-8">
//             Visit us today and find your perfect companion! 🐾
//           </p>
//           <button className="bg-[#E07A5F] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#bd5c41] transform hover:-translate-y-1 transition-all duration-300">
//             Visit Our Pet Family
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }