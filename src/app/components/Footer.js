export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-black text-center font-bold text-xl p-6 text-gray-600 dark:text-fuchsia-700 shadow-inner">
      © {year} Dependency app. All Rights Reserved.
    </footer>
  );
}
