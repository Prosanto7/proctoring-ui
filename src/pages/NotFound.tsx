
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-blue-50 py-20">
        <div className="text-center max-w-lg px-4">
          <div className="text-6xl font-bold text-elearning-700 mb-6">404</div>
          <h1 className="text-3xl font-bold text-elearning-600 mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-elearning-600 hover:bg-elearning-700 text-white">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
