import { Navigation } from "./Navigation";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-slate-900 flex">
        <div className="sticky">
          <Navigation />
        </div>
        <main className="container mx-auto mt-10 p-5 flex-1 justify-center h-auto">
          {children}
        </main>
      </div>
    </>
  );
};
