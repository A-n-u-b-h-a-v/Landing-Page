import React from 'react'

const LoginForm = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 ">
  <form className=" bg-white/70 border border-white/10 shadow-2xl rounded-xl p-5 sm:p-6 w-full max-w-sm space-y-4">
    <h2 className="text-lg sm:text-xl font-semibold mb-3 text-center text-white tracking-wide">
      Start your Study Abroad Journey
    </h2>

    <div>
      <label className="block text-sm font-medium mb-1 text-gray-300">
        Name<span className="text-red-400">*</span>
      </label>
      <input
        type="text"
        className="bg-white/10 border border-gray-600 text-white placeholder-gray-400 p-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Full Name*"
        required
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-1 text-gray-300">
        Email Address<span className="text-red-400">*</span>
      </label>
      <input
        type="email"
        className="bg-white/10 border border-gray-600 text-white placeholder-gray-400 p-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Email Address*"
        required
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-1 text-gray-300">
        Mobile Number<span className="text-red-400">*</span>
      </label>
      <div className="flex">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-600 bg-white/10 text-gray-400 text-sm">
          +91
        </span>
        <input
          type="tel"
          className="bg-white/10 border border-gray-600 text-white placeholder-gray-400 p-2 rounded-r-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Mobile Number*"
          required
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium mb-1 text-gray-300">
        Pincode<span className="text-red-400">*</span>
      </label>
      <input
        type="text"
        className="bg-white/10 border border-gray-600 text-white placeholder-gray-400 p-2 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Pincode*"
        required
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-1 text-gray-300">
        Counselling Type<span className="text-red-400">*</span>
      </label>
      <div className="flex space-x-4 text-gray-300">
        <label className="inline-flex items-center space-x-1">
          <input type="radio" name="counsellingType" value="in-center" className="form-radio text-blue-600" required />
          <span>In-Center</span>
        </label>
        <label className="inline-flex items-center space-x-1">
          <input type="radio" name="counsellingType" value="online" className="form-radio text-blue-600" required />
          <span>Online</span>
        </label>
      </div>
    </div>

    <div className="flex items-center text-gray-300 text-sm">
      <input type="checkbox" id="terms" className="mr-2" required />
      <label htmlFor="terms">I agree to terms & privacy policy</label>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-700 hover:bg-blue-600 text-white py-2 rounded-md font-semibold text-sm transition"
    >
      Book Free Consultation
    </button>
  </form>
</div>


    );
}

export default LoginForm
