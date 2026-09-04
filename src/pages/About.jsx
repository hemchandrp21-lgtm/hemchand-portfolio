import Header from '../components/Header';

function About() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-amber-400 selection:text-black pt-28">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4">
          About
        </h1>
      </main>
    </div>
  );
}

export default About;
