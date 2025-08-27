import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-10">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug">
          Stay Organized, <br />
          Boost Your Productivity
        </h2>
        <p className="text-lg text-white">
          Manage your tasks with ease, track your progress, and get more done
          with{" "}
          <span className="text-fuchsia-600 font-semibold">Dependency</span>.
        </p>
        <Link
          href="/tasks"
          className="inline-block px-6 py-3 bg-fuchsia-600 text-white rounded-lg text-lg shadow hover:bg-fuchsia-700 transition"
        >
          Start Now — It’s Free
        </Link>
      </div>
    </section>
  );
}
