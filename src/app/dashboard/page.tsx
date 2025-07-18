import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Navbar } from '@/components/Navbar';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Dashboard
          </h1>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-green-800 mb-2">
              🎉 Welcome to your protected dashboard!
            </h2>
            <p className="text-green-700">
              You are successfully authenticated and can access this protected page.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                User Information
              </h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Name:</strong> {session.user?.name || 'Not provided'}</p>
                <p><strong>Email:</strong> {session.user?.email}</p>
                <p><strong>User ID:</strong> {session.user?.id}</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Session Details
              </h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Session Active:</strong> ✅ Yes</p>
                <p><strong>Authentication:</strong> Verified</p>
                <p><strong>Protected Route:</strong> /dashboard</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">
              🔒 Route Protection
            </h3>
            <p className="text-blue-700 mb-4">
              This page is protected by NextAuth middleware. Users must be authenticated to access it.
            </p>
            <ul className="text-blue-700 space-y-1">
              <li>• Automatic redirect to sign-in if not authenticated</li>
              <li>• Server-side session validation</li>
              <li>• Secure route protection</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
