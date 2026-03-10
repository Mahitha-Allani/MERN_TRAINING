import { Outlet } from "react-router";
import Header from "./Header";

function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;