import React from 'react';
import heroImage from "../assets/hero-image.jpg";

const LoginPage = ({ onBack }) => (
    <div
        className="w-full h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
    >
        <div className="bg-white bg-opacity-90 text-gray-800 p-8 rounded-xl shadow-2xl w-96 backdrop-blur-md">
            <h2 className="text-3xl font-bold text-center mb-8">Welcome Back!</h2>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm mb-2" htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="example@email.com"
                    />
                </div>
                <div>
                    <label className="block text-sm mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300">
                    Sign In
                </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-6">
                Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
            </p>

            {/* Back button */}
            <div className="mt-6 text-center">
                <button onClick={onBack} className="text-blue-500 hover:underline text-sm">
                    ← Back to Home
                </button>
            </div>
        </div>
    </div>
);

export default LoginPage;
