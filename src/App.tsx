import { BestsellerBooks } from './shaders/bestseller-books/BestsellerBooks';
import './shaders/threeui.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CurrencyProvider } from './context/CurrencyContext';
import { BookmarkProvider } from './context/BookmarkContext';
import { ToolsProvider } from './context/ToolsContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { CompareModal } from './components/CompareModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';

// Pages
import { HomePage } from './pages/HomePage';
import { AllToolsPage } from './pages/AllToolsPage';
import { BestAiToolsPage } from './pages/BestAiToolsPage';
import { CompareToolsPage } from './pages/CompareToolsPage';
import { ToolDetailPage } from './pages/ToolDetailPage';
import { CategoryDetailPage } from './pages/CategoryDetailPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { SubmitToolPage } from './pages/SubmitToolPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AffiliateDisclosurePage } from './pages/AffiliateDisclosurePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { BestsellerBooksDemoPage } from './pages/BestsellerBooksDemoPage';

// Scroll to top helper on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [bookmarksOpen, setBookmarksOpen] = useState(false);

  return (
    <CurrencyProvider>
      <BookmarkProvider>
        <ToolsProvider>
          <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 selection:bg-indigo-500 selection:text-white">
              <Navbar
                onOpenSearch={() => setSearchOpen(true)}
                onOpenCompare={() => setCompareOpen(true)}
                onOpenBookmarks={() => setBookmarksOpen(true)}
              />

              <main className="flex-1">
                <Routes>
                  {/* 1. Home */}
                  <Route path="/" element={<HomePage onOpenSearch={() => setSearchOpen(true)} />} />

                  {/* 2. All Tools */}
                  <Route path="/tools" element={<AllToolsPage />} />

                  {/* 3. Best AI Tools (Guides Hub) */}
                  <Route path="/best-ai-tools" element={<BestAiToolsPage />} />
                  <Route path="/blog" element={<BestAiToolsPage />} />
                  <Route path="/blog/:slug" element={<ArticleDetailPage />} />

                  {/* 4. Compare Tools (Dedicated Side-by-Side Page) */}
                  <Route path="/compare" element={<CompareToolsPage />} />

                  {/* 5. Tool Dynamic Detail Page */}
                  <Route path="/tool/:slug" element={<ToolDetailPage />} />

                  {/* 6. Category Page */}
                  <Route path="/category/:slug" element={<CategoryDetailPage />} />

                  {/* 7. Submit Your Tool */}
                  <Route path="/submit" element={<SubmitToolPage />} />

                  {/* 8. Trust & Legal Pages */}
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms" element={<TermsPage />} />

                  <Route path="/bestsellers" element={<BestsellerBooksDemoPage />} />
                  {/* Catch-all */}
                  <Route path="*" element={<HomePage onOpenSearch={() => setSearchOpen(true)} />} />
                </Routes>
              </main>

              <Footer />

              {/* Modals & Overlays */}
              <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
              <CompareModal isOpen={compareOpen} onClose={() => setCompareOpen(false)} />
              <BookmarksDrawer isOpen={bookmarksOpen} onClose={() => setBookmarksOpen(false)} />
            </div>
          </Router>
        </ToolsProvider>
      </BookmarkProvider>
    </CurrencyProvider>
  );
}

export default App;
