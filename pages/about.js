export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="w-64 h-64 relative group">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full rounded-full object-cover shadow-lg 
                     transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            About Me
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            I'm a passionate web developer with a knack for building engaging,
            user-friendly web applications. My work combines technical expertise
            and creative problem-solving to craft beautiful and functional
            websites.
          </p>
        </div>
      </div>
    </section>
  );
}
  