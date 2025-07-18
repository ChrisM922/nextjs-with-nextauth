export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Next.js + NextAuth
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            A complete authentication boilerplate for your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">🔐 Secure Authentication</h3>
              <p className="text-blue-100">Multiple providers & credential-based auth</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">🚀 Ready to Deploy</h3>
              <p className="text-blue-100">Production-ready with modern stack</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">🎨 Beautiful UI</h3>
              <p className="text-blue-100">Tailwind CSS with responsive design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
