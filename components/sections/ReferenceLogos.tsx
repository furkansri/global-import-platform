export function ReferenceLogos() {
  const LOGOS = ['Firma A', 'Firma B', 'Firma C', 'Firma D', 'Firma E', 'Firma F']

  return (
    <section className="py-14 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-navy/40 uppercase tracking-widest mb-8 font-medium">
          Güvenilir Referanslarımız
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {LOGOS.map(name => (
            <div
              key={name}
              className="w-24 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-400 font-medium opacity-60"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
