import { Link } from "react-router-dom";

export function Home() {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Shop Smart.<br />Live Better.
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-600 max-w-md">
              Quality products, honest prices, and a shopping experience
              designed to feel simple and reliable.
            </p>

            <Link
              to="/store"
              className="inline-block mt-8 rounded-md bg-black px-6 py-3 text-white text-sm md:text-base font-medium hover:bg-gray-800 transition"
            >
              Shop Now
            </Link>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Online shopping"
              className="w-full max-w-lg rounded-xl object-cover shadow-md"
            />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="rounded-xl border p-8 text-center hover:shadow-sm transition">
              <h3 className="text-lg font-medium text-gray-900">
                Fast Delivery
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Get your products delivered quickly and safely.
              </p>
            </div>

            <div className="rounded-xl border p-8 text-center hover:shadow-sm transition">
              <h3 className="text-lg font-medium text-gray-900">
                Secure Payments
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Your payment information is fully protected.
              </p>
            </div>

            <div className="rounded-xl border p-8 text-center hover:shadow-sm transition">
              <h3 className="text-lg font-medium text-gray-900">
                Trusted Quality
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                Carefully selected products you can rely on.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Ready to start shopping?
          </h2>

          <p className="mt-4 text-gray-600">
            Browse our store and find what fits your lifestyle.
          </p>

          <Link
            to="/store"
            className="inline-block mt-8 rounded-md border border-black px-6 py-3 text-sm md:text-base font-medium text-black hover:bg-black hover:text-white transition"
          >
            Visit Store
          </Link>
        </div>
      </section>

    </main>
  );
}
