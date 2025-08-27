export default function Features() {
  const features = [
    {
      title: "✅ Easy to Use",
      desc: "Add, edit, and manage your tasks effortlessly with a clean interface.",
    },
    {
      title: "📱 Responsive",
      desc: "Works perfectly on desktop and mobile devices for on-the-go productivity.",
    },
    {
      title: "🌙 Customizable",
      desc: "Switch between light and dark themes for a personalized experience.",
    },
  ];

  return (
    <section id="features" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h3 className="text-3xl font-bold text-gray-800">
          Why Choose Dependency?
        </h3>
        <div className="grid md:grid-cols-3 gap-10 text-left px-6 md:px-0">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-xl mb-3">{f.title}</h4>
              <p className="text-fuchsia-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
