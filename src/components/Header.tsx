
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { X, Menu, Package, Server, BookOpen, Phone, ShieldCheck } from "lucide-react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/logo.png" 
            alt="eLearning23 Logo" 
            className="h-10 md:h-8"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link 
                  to="/" 
                  className={`text-elearning-700 hover:text-elearning-500 font-medium transition-colors px-3 py-2 ${
                    location.pathname === '/' ? 'text-elearning-500' : ''
                  }`}
                >
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-elearning-700 hover:text-elearning-500 font-medium">
                  <Package className="mr-1 h-4 w-4" />
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link to="/products/proctoring-pro" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-cyan-50 p-6 no-underline outline-none focus:shadow-md">
                          <div className="flex items-center gap-2 mb-2">
                            <ShieldCheck className="h-5 w-5 text-elearning-700" />
                            <div className="text-lg font-medium text-elearning-700">
                              Proctoring Pro
                            </div>
                          </div>
                          <p className="text-sm leading-tight text-gray-600">
                            Our flagship Moodle quiz access plugin that ensures academic integrity in online assessments.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link to="/products" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50">
                        <div className="text-sm font-medium text-elearning-700">Content Creator</div>
                        <p className="line-clamp-2 text-sm text-gray-600">
                          Streamlined content creation tools for educators.
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50">
                        <div className="text-sm font-medium text-elearning-700">Analytics Dashboard</div>
                        <p className="line-clamp-2 text-sm text-gray-600">
                          Comprehensive learning analytics and reporting.
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/products" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 focus:bg-blue-50">
                        <div className="text-sm font-medium text-elearning-700">Cloud Backup</div>
                        <p className="line-clamp-2 text-sm text-gray-600">
                          Secure cloud backup solution for Moodle.
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link 
                  to="/services" 
                  className={`flex items-center text-elearning-700 hover:text-elearning-500 font-medium transition-colors px-3 py-2 ${
                    location.pathname === '/services' ? 'text-elearning-500' : ''
                  }`}
                >
                  <Server className="mr-1 h-4 w-4" />
                  Services
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link 
                  to="/about" 
                  className={`flex items-center text-elearning-700 hover:text-elearning-500 font-medium transition-colors px-3 py-2 ${
                    location.pathname === '/about' ? 'text-elearning-500' : ''
                  }`}
                >
                  <BookOpen className="mr-1 h-4 w-4" />
                  About Us
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link 
                  to="/contact" 
                  className={`flex items-center text-elearning-700 hover:text-elearning-500 font-medium transition-colors px-3 py-2 ${
                    location.pathname === '/contact' ? 'text-elearning-500' : ''
                  }`}
                >
                  <Phone className="mr-1 h-4 w-4" />
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex border-elearning-600 text-elearning-600 hover:bg-elearning-50">
            Sign In
          </Button>
          <Button className="bg-elearning-600 hover:bg-elearning-700 text-white">
            Get Started
          </Button>
          <button 
            className="md:hidden text-elearning-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="px-4 py-2 text-elearning-700 hover:bg-blue-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="px-4 py-2 text-elearning-700 hover:bg-blue-50 rounded-md flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Package className="mr-2 h-4 w-4" />
                Products
              </Link>
              <Link 
                to="/products/proctoring-pro" 
                className="px-4 py-2 ml-4 text-elearning-700 hover:bg-blue-50 rounded-md flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShieldCheck className="mr-2 h-4 w-4" />
                Proctoring Pro
              </Link>
              <Link 
                to="/services" 
                className="px-4 py-2 text-elearning-700 hover:bg-blue-50 rounded-md flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Server className="mr-2 h-4 w-4" />
                Services
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 text-elearning-700 hover:bg-blue-50 rounded-md flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 text-elearning-700 hover:bg-blue-50 rounded-md flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </Link>
              <Button variant="outline" className="border-elearning-600 text-elearning-600 hover:bg-elearning-50">
                Sign In
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
