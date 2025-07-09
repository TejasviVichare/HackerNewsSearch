import Search from "./Components/Search/Search";
import Pagination from "./Components/Pagination/Pagination";
import Stories from "./Components/Stories/Stories";
import { AppProvider } from "./Contex";

export default function Home() {
  return (
    <AppProvider>
      <main className="min-h-screen bg-gradient-to-r from-indigo-100 via-white to-indigo-100 py-10 px-4">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700">
            Hacker News Search
          </h1>

          <Search />
          <Pagination />
          <Stories />
        </div>
      </main>
    </AppProvider>
  );
}
