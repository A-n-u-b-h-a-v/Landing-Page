import React from 'react'

const LoginForm = () => {
    return (
        <div className="flex flex-col items-center justify-centermin-h-screen px-2">
            <form className="bg-white p-6 sm:p-8 rounded shadow-md w-full max-w-md space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Start your Study Abroad Journey</h2>
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded-md w-full text-sm"
                        placeholder="Enter Full Name*"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Enter Email Address<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        className="border border-gray-300 p-2 rounded-md w-full text-sm"
                        placeholder="Enter Email Address*"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Mobile number<span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            +91
                        </span>
                        <input
                            type="tel"
                            className="border border-gray-300 p-2 rounded-r-md w-full text-sm"
                            placeholder="Mobile number*"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Pincode<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded-md w-full text-sm"
                        placeholder="Pincode*"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Counselling Type<span className="text-red-500">*</span> :
                    </label>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                        <label className="inline-flex items-center">
                            <input type="radio" name="counsellingType" value="in-center" className="form-radio" required />
                            <span className="ml-2">In-Center</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="radio" name="counsellingType" value="online" className="form-radio" required />
                            <span className="ml-2">Online</span>
                        </label>
                    </div>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" id="terms" className="mr-2" required />
                    <label htmlFor="terms" className="text-sm">
                        I have read and agreed to terms &amp; privacy policy
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition text-sm sm:text-base"
                >
                    Book your free consultation
                </button>
            </form>
        </div>
    );
}

export default LoginForm
