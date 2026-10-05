import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Sparkles,
  Bookmark,
  ArrowLeftRight,
  Menu,
  X,
  PlusCircle,
  Coins,
  BookOpen,
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { useBookmarks } from '../context/BookmarkContext';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenCompare: () => void;
  onOpenBookmarks: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenCompare,
  onOpenBookmarks,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currency, toggleCurrency } = useCurrency();
  const { bookmarkedIds } = useBookmarks();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && (location.pathname === path || location.pathname.startsWith(path + '/'))) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg text-white tracking-tight">
                Ai<span className="gradient-text">Hunt</span>
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 uppercase tracking-wider">
                HUB
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium tracking-tight -mt-0.5 hidden sm:block">
              AI Tools Directory & Review Hub
            </p>
          </div>
        </Link>

        {/* Desktop Nav Links: Home, All Tools, Best AI Tools, Compare, Submit Your Tool, About */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-300">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              isActive('/')
                ? 'bg-slate-800 text-white font-semibold'
                : 'hover:text-white hover:bg-slate-900/60'
            }`}
          >
            Home
          </Link>
          <Link
            to="/tools"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              isActive('/tools')
                ? 'bg-slate-800 text-white font-semibold'
                : 'hover:text-white hover:bg-slate-900/60'
            }`}
          >
            All Tools
          </Link>
          <Link
            to="/best-ai-tools"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              isActive('/best-ai-tools')
                ? 'bg-slate-800 text-white font-semibold'
                : 'hover:text-white hover:bg-slate-900/60'
            }`}
          >
            Best AI Tools
          </Link>
          <Link
            to="/compare"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              isActive('/compare')
                ? 'bg-slate-800 text-white font-semibold'
                : 'hover:text-white hover:bg-slate-900/60'
            }`}
          >
            Compare
          </Link>
          <Link
            to="/submit"
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
              isActive('/submit')
                ? 'bg-indigo-600/20 text-indigo-400 font-semibold border border-indigo-500/40'
                : 'text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10'
            }`}
          >
            <PlusCircle className="w-4 h-4" />
            Submit Your Tool
          </Link>
          <Link
            to="/about"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              isActive('/about')
                ? 'bg-slate-800 text-white font-semibold'
                : 'hover:text-white hover:bg-slate-900/60'
            }`}
          >
            About
          </Link>
        </nav>

        {/* Right side controls: Search, Currency, Bookmarks, Mobile trigger */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs text-slate-400 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors cursor-pointer"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search directory...</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 rounded text-slate-400">
              Ctrl K
            </kbd>
          </button>

          {/* Search icon on mobile */}
          <button
            onClick={onOpenSearch}
            className="sm:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Currency Switcher */}
          <button
            onClick={toggleCurrency}
            title={`Switch to ${currency === 'INR' ? 'USD ($)' : 'INR (₹)'}`}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
          >
            <Coins className="w-3.5 h-3.5 text-amber-400" />
            <span>{currency === 'INR' ? '₹ INR' : '$ USD'}</span>
          </button>

          {/* Bookmarks Button */}
          <button
            onClick={onOpenBookmarks}
            title="Saved Tools"
            className="relative p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Bookmark className="w-4 h-4" />
            {bookmarkedIds.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
                {bookmarkedIds.length}
              </span>
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 p-4 space-y-2 animate-fadeIn">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-sm font-medium ${
              isActive('/') ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            Home
          </Link>
          <Link
            to="/tools"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-sm font-medium ${
              isActive('/tools') ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            All Tools
          </Link>
          <Link
            to="/best-ai-tools"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-sm font-medium ${
              isActive('/best-ai-tools') ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            Best AI Tools
          </Link>
          <Link
            to="/compare"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-sm font-medium ${
              isActive('/compare') ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            Compare Tools
          </Link>
          <Link
            to="/submit"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-indigo-400 hover:bg-slate-900"
          >
            Submit Your Tool
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-sm font-medium ${
              isActive('/about') ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            About
          </Link>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-3">
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
              Contact
            </Link>
            <Link to="/affiliate-disclosure" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
              Affiliate Disclosure
            </Link>
            <Link to="/privacy-policy" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
