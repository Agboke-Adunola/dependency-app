export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-gray-200 text-center p-6 text-gray-600 dark:text-blue-800 text-sm shadow-inner">
      © {year} Dependency app. All Rights Reserved.
    </footer>
  );
}
