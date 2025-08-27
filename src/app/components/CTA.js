import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="get-started"
      className="text-center py-20 bg-fuchsia-600 text-fuchsia"
    >
      <h3 className="text-3xl font-bold mb-6">Ready to Start?</h3>
      <Link
        href="/tasks"
        className="px-8 py-4 bg-black text-fuchsia-600 rounded-lg text-lg font-semibold shadow hover:bg-gray-200 transition"
      >
        Start
      </Link>
    </section>
  );
}
