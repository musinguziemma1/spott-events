import Link from 'next/link';
import { Button } from "../components/ui/button";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Left Hero Content */}
          <div className="text-center sm:text-left">
            <span className="block text-gray-500 font-light tracking-wide mb-6">
              spott<span className="text-purple-400">*</span>
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-[0.95] tracking-tight">
              Discover &<br />
              create amazing<br />
              <span className='bg-linear-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent'>events.</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-lg font-light">
              Whether you're hosting or attending, Spott Events make every event memorable. Join our community today.
            </p>

            <Link href="/explore" className="inline-block">
              <Button size="xl" className="rounded-full px-8 py-3">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Hero Image/Visual Placeholder */}
          <div>
            <Image 
              src="/3d-react.png" 
              alt='hero image'
              width={700}
              height={700}
              className='w-full h-auto'
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
