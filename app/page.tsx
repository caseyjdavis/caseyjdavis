import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <Image
            src="/caseyjdavis.png"
            alt="Casey J Davis"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-8"
            priority
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            👋 Hi, I&apos;m Casey an IT Consultant
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            I help businesses navigate complex technical challenges and drive digital transformation. Located in Edgewater, Colorado.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get in Touch
            </Link>
            <Link
              href="/blog"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition"
            >
              Read My Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Strategic Consulting</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Expert guidance on technology strategy, architecture decisions, and digital transformation initiatives.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Technical Implementation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Hands-on development and implementation of scalable, modern solutions tailored to your business needs.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-3 dark:text-white">Performance Optimization</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Analyze and optimize your existing systems for better performance, scalability, and cost efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio/Work Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Recent Work
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <svg width="32" height="32" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#0078D4" d="M0 0h48v48H0z"/>
                  <path fill="#50E6FF" d="M48 0h48v48H48z"/>
                  <path fill="#0078D4" d="M0 48h48v48H0z"/>
                  <path fill="#00BCF2" d="M48 48h48v48H48z"/>
                </svg>
                <h3 className="text-xl font-semibold dark:text-white">Microsoft Entra Tenant Migration</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Migrated an existing organization&apos;s Office 365 tenant with zero downtime, streamlined device deployment using Microsoft Autopilot and automated user account creation.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">Entra</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">Powershell</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">Azure</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="#FFC107" stroke="#F57C00" strokeWidth="1" strokeLinejoin="round"/>
                </svg>
                <h3 className="text-xl font-semibold dark:text-white">Web Analytics and SEO Optimization</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Helping small busineses understand their web traffic and market to new customers once their SEO is optimized.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">GA4</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">Github</span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">Posthog</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to level up your IT?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how I can help your business succeed
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Schedule a Free Consult
          </Link>
        </div>
      </section>
    </div>
  );
}
