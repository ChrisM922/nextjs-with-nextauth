import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <Hero />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome to Next.js with NextAuth
          </h2>
          
          {session ? (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  🎉 You are authenticated!
                </h3>
                <p className="text-green-700">
                  Welcome back, {session.user?.name || session.user?.email}!
                </p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Session Info:</h4>
                <pre className="text-sm text-gray-600 overflow-x-auto">
                  {JSON.stringify(session, null, 2)}
                </pre>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  🔒 You are not authenticated
                </h3>
                <p className="text-blue-700">
                  Please sign in to access protected features.
                </p>
              </div>
            </div>
          )}
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                🚀 Features
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• NextAuth.js integration</li>
                <li>• Email/Password authentication</li>
                <li>• OAuth providers (Google, GitHub)</li>
                <li>• Prisma ORM with SQLite</li>
                <li>• TypeScript support</li>
                <li>• Tailwind CSS styling</li>
                <li>• Responsive design</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                🛠️ Quick Start
              </h3>
              <ol className="space-y-2 text-gray-600">
                <li>1. Install dependencies</li>
                <li>2. Set up environment variables</li>
                <li>3. Run database migrations</li>
                <li>4. Start the development server</li>
                <li>5. Open http://localhost:3000</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
