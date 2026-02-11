import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const donateUrl = "https://secure.actblue.com/donate/quincy-for-congress-1";

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/QuincyforMD05/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/QuincyforMD05/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@QuincyforMD05",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
          <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/QuincyforMD05",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z" />
        </svg>
      ),
    },
    {
      name: "Threads",
      url: "https://www.threads.net/@QuincyforMD05",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.28 10.63a3.52 3.52 0 0 1-1.31 2.8c-.85.67-2 .82-3.23.43a3.3 3.3 0 0 1-2.2-3.13 3.33 3.33 0 0 1 2.37-3.23 3.5 3.5 0 0 1 4.37 3.13zm6.32 1.37a8.55 8.55 0 1 0-8.55 8.55c1.45 0 2.8-.35 4-1a.75.75 0 0 0-.75-1.3 7 7 0 1 1 3-5.83c0 .85-.15 1.57-.45 2.15-.35.63-.82.95-1.4.95s-1.07-.32-1.42-.95c-.32-.58-.48-1.3-.48-2.15v-1.63a5.05 5.05 0 0 0-5.05-5.05c-2.77 0-5.05 2.28-5.05 5.05a4.83 4.83 0 0 0 3.22 4.57 4.95 4.95 0 0 0 6.83-2.1c.32-.62.53-1.32.65-2.07.72.67 1.63 1.05 2.65 1.05 2.22 0 3.8-1.5 3.8-3.65 0-1.12-.32-2.15-.9-3.05a10 10 0 1 1-2 13.05.75.75 0 1 0 1.3.75 11.5 11.5 0 1 0 2.3-15.05c.7.9 1.1 2 1.1 3.2z" />
        </svg>
      ),
    },
    {
      name: "BlueSky",
      url: "https://bsky.app/profile/quincybareebe.bsky.social",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 10.8c-1.32-2.5-4.48-5.3-7.5-6.3-1.5-.5-3 .1-3 .1 1.1.8 2.5 3.1 2.5 5.7 0 4.1-3.6 5.3-3.6 9.4 0 1.1.6 1.8 1.6 1.8 4.2 0 6.1-5.6 10-5.6 3.9 0 5.8 5.6 10 5.6 1 0 1.6-.7 1.6-1.8 0-4.1-3.6-5.3-3.6-9.4 0-2.6 1.4-4.9 2.5-5.7 0 0-1.5-.6-3-.1-3.02 1-6.18 3.8-7.5 6.3z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12 border-t-[12px] border-brand-yellow">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/01/quincy_logo-for-Dark-Background.png"
              alt="Quincy Bareebe Logo"
              className="h-20 md:h-28 lg:h-36 mb-8 object-contain"
            />
            <p className="text-gray-200 text-sm md:text-lg font-medium tracking-wide leading-relaxed max-w-sm mb-8">
              Fresh, energetic leadership to protect Maryland's families and
              build a stronger, more equitable future for the 5th District.
            </p>
          </div>
          <div className="md:col-span-3 text-center md:text-left">
            <div className="mb-6 md:mb-10 inline-block md:block">
              <h4 className="text-brand-yellow font-extrabold uppercase tracking-[0.3em] text-[11px] md:text-sm mb-2">
                Campaign
              </h4>
              <div className="h-1 w-16 md:w-20 bg-brand-yellow mx-auto md:mx-0"></div>
            </div>
            <ul className="space-y-4 md:space-y-6 text-sm md:text-lg font-bold uppercase tracking-widest">
              <li>
                <Link
                  to="/"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Meet Quincy
                </Link>
              </li>
              <li>
                <Link
                  to="/issues"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Issues
                </Link>
              </li>
              <li>
                <Link
                  to="/take-action"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href={donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Donate
                </a>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4 text-center md:text-left">
            <div className="mb-6 md:mb-10 inline-block md:block">
              <h4 className="text-brand-yellow font-extrabold uppercase tracking-[0.3em] text-[11px] md:text-sm mb-2">
                Get In Touch
              </h4>
              <div className="h-1 w-20 md:w-28 bg-brand-yellow mx-auto md:mx-0"></div>
            </div>
            <div className="mb-8 md:mb-10">
              <a
                href="mailto:info@quincyforcongress.com"
                className="text-lg md:text-xl font-extrabold mb-1 md:mb-2 tracking-tighter italic block hover:text-brand-yellow transition-colors"
              >
                Click Here to Email the Campaign
              </a>
              <p className="text-lg md:text-xl font-extrabold mb-6 md:mb-8 tracking-tighter">
                443-741-0604
              </p>
            </div>

            <div className="mb-6 md:mb-10 inline-block md:block">
              <h4 className="text-brand-yellow font-extrabold uppercase tracking-[0.3em] text-[11px] md:text-sm mb-2">
                Follow Us
              </h4>
              <div className="h-1 w-12 md:w-16 bg-brand-yellow mx-auto md:mx-0"></div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-brand-yellow transition-all transform hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 w-full justify-center">
            <span className="text-[10px] md:text-[12px] font-extrabold uppercase tracking-widest text-gray-400">
              &copy; {new Date().getFullYear()} Quincy for Congress.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
