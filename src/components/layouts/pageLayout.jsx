export default function PageLayout({ children }) {
  return (
    <div className="w-full min-h-screen black-grid-pattern-bg ">
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-24 flex flex-col gap-5">
            {children}
        </div>
    </div>
  );
}