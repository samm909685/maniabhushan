import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collections from "./components/Collections";

function PlaceholderCollection({ type }) {
  return (
    <main className="min-h-[calc(100vh-82px)] bg-[#FFF8EA] px-6 py-24 text-center text-[#062D3E]">
      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#BA8C5B]">
        Maniabhushan Collections
      </p>

      <h1 className="font-serif text-5xl font-normal capitalize md:text-6xl">
        {type} Jewellery
      </h1>

      <p className="mx-auto mt-5 max-w-xl font-serif text-base leading-7 text-[#38515A]">
        The category structure for {type.toLowerCase()} jewellery will be built
        here next.
      </p>
    </main>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Collections />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#071720]">
      <Navbar />

      <Routes>
        {/* HOME */}

        <Route path="/" element={<Home />} />

        {/* COLLECTIONS */}

        <Route path="/collections" element={<Collections />} />

        {/* GOLD */}

        <Route
          path="/collections/gold"
          element={<PlaceholderCollection type="Gold" />}
        />

        {/* SILVER */}

        <Route
          path="/collections/silver"
          element={<PlaceholderCollection type="Silver" />}
        />
      </Routes>
    </div>
  );
}

export default App;