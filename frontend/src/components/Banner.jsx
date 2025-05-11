import { Link } from 'react-router-dom';
import Product from './Freebook';
import Footer from './Footer';

export default function Banner() {
  return (
    <div className="">
      <div className="relative isolate overflow-hidden px-6 mt-20 pt-16 pb-20 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle r={512} cx={512} cy={512} fill="url(#gradient)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="gradient">
              <stop stopColor="#ffffff" />
              <stop offset={1} stopColor="#000000" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Unlock Your Potential with Our App
          </h2>
          <p className="mt-6 text-lg text-gray-200">
            Discover tools that help you stay productive and organized. Start your journey today and achieve more.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link to="/login">
              <div className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Get Started
              </div>
            </Link>
            <a href="#" className="text-sm font-semibold text-white hover:underline">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8 lg:h-auto lg:w-1/2">
          <img
            alt="App screenshot"
            src="book.png"
            className="absolute top-0 left-0 w-full max-w-none rounded-lg shadow-lg ring-1 ring-white/10"
          />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}