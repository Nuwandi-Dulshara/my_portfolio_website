import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "./index.css";

// Lazy-loaded pages for performance
const Home = lazy(() => import("./pages/Home"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2 border-sky-400/30 border-t-sky-400 animate-spin" />
        <p className="text-xs text-slate-600 tracking-widest uppercase">
          Loading
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              {/* 404 fallback */}
              <Route
                path="*"
                element={
                  <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
                    <p className="text-6xl font-bold text-slate-800">404</p>
                    <p className="text-lg text-slate-400">Page not found</p>
                    <a
                      href="/"
                      className="px-6 py-3 rounded-full text-sm font-medium border border-sky-400/30 bg-sky-400/10 text-sky-300 hover:bg-sky-400/20 transition-all"
                    >
                      Go home
                    </a>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
