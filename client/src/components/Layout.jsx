const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-semibold text-center text-green-600">
          🐾 User Profile App
        </h1>
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
