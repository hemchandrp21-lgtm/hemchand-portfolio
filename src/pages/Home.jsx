import Header from '../components/Header';
import { Button } from '@/components/ui/button';

function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-amber-400 selection:text-black pt-28">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-16 text-center flex flex-col items-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white mb-6">
          Home
        </h1>
        <div className="flex gap-4">
          <Button variant="default">Shadcn Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </main>
    </div>
  );
}

export default Home;
