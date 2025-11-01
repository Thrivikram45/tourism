import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Compass, Camera, Sun, Plane } from "lucide-react";

const More = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-white text-gray-800">
      <h1 className="text-3xl font-bold text-center text-blue-700 pt-10">
        Discover More with Us
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Explore travel tips, popular spots, and quick links below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10 px-6">
        <Link to="/more/about" className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">About Us</h3>
          <p className="text-gray-600 text-sm">Know more about our story and what drives us to show you incredible places.</p>
        </Link>
        <Link to="/more/contact" className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Contact</h3>
          <p className="text-gray-600 text-sm">Need help? Reach out to our support team anytime.</p>
        </Link>
        <Link to="/more/feedback" className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Feedback</h3>
          <p className="text-gray-600 text-sm">We value your thoughts — help us make your experience even better!</p>
        </Link>
      </div>


      <div className="max-w-6xl mx-auto mt-14 px-6">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Travel Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <Sun className="text-yellow-500 mb-2" size={28} />
            <h3 className="font-semibold text-lg">Pack Light & Smart</h3>
            <p className="text-sm text-gray-600 mt-1">Carry only essentials and travel comfortably without heavy luggage.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <Plane className="text-blue-500 mb-2" size={28} />
            <h3 className="font-semibold text-lg">Book in Advance</h3>
            <p className="text-sm text-gray-600 mt-1">Get better deals on tickets and hotels when you plan early.</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <Compass className="text-green-500 mb-2" size={28} />
            <h3 className="font-semibold text-lg">Explore Local Spots</h3>
            <p className="text-sm text-gray-600 mt-1">Don’t just follow tourist paths — discover hidden local gems.</p>
          </div>
        </div>
      </div>

    
      <div className="mt-16 bg-blue-100 py-10">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src="https://plus.unsplash.com/premium_photo-1694475141514-6c2ee0d93378?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171" 
            alt="Taj Mahal" className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-blue-700">Taj Mahal</h3>
              <p className="text-sm text-gray-600">Agra, Uttar Pradesh</p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src="https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" 
            alt="Goa Beach" className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-blue-700">Goa Beaches</h3>
              <p className="text-sm text-gray-600">Goa</p>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60" alt="Jaipur Palace" className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-blue-700">Jaipur Palace</h3>
              <p className="text-sm text-gray-600">Rajasthan</p>
            </div>
          </div>
        </div>
      </div>

  
      <div className="py-12 text-center bg-linear-to-r from-blue-600 to-cyan-500 text-white mt-16">
        <h2 className="text-2xl font-semibold italic">"Travel makes you richer in memories, not in money."</h2>
      </div>

    </div>
  );
};

export default More;
