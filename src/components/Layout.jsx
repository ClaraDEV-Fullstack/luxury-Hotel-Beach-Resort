import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Waves, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  return (
      <div className="min-h-screen flex flex-col">
        {/* Main Content Section */}
        <main className="main-content-wrapper flex-grow pt-24">
          <div className="container mx-auto px-4">
            <Outlet /> {/* Renders nested routes */}
          </div>
        </main>
      </div>
  );
}