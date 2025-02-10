"use client"

const ContactForm = () => {
    return (
      <div className="flex flex-col md:flex-row mx-auto">
        {/* Left Section */}
        <div className="md:w-1/2 p-6 text-lg">
          <h2 className="text-4xl font-extrabold mb-4 text-green-700">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            For detail discussion and for more information about our services, please visit our office at:
          </p>
          <div className="text-gray-700 space-y-4">
            <p><strong>Address:</strong> No(103), 6th Floor,  Ka 2nd Street, Myio Thit (Ka+Kha) Quarter, Insein Township,  Yangon, Myanmar.</p>
            <p><strong>Phone:</strong> +95 9 9611 630 39, +95 9 982 642 881</p>
            <p><strong>Email:</strong> chohtwe@psservicemm.com, nyeinchanwin@psservicemm.com</p>
          </div>
        </div>
  
        {/* Right Section - Form */}
        <div className="md:w-1/2 p-6">
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First name" className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" placeholder="Last name" className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="tel" placeholder="Phone number" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Message" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24" />
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">Send message</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactForm;
  