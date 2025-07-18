'use client';

import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function DeleteUserButton() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter();

  const handleDeleteUser = async () => {
    setIsDeleting(true);
    
    try {
      const response = await fetch('/api/user/delete', {
        method: 'DELETE',
      });

      if (response.ok) {
        // Sign out the user and redirect to home page
        await signOut({ callbackUrl: '/' });
      } else {
        const data = await response.json();
        alert(`Error: ${data.error || 'Failed to delete account'}`);
      }
    } catch (error) {
      alert('An error occurred while deleting your account');
    } finally {
      setIsDeleting(false);
      setShowConfirmation(false);
    }
  };

  if (showConfirmation) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-red-800 mb-4">
          ⚠️ Delete Account Confirmation
        </h3>
        <p className="text-red-700 mb-4">
          Are you sure you want to delete your account? This action cannot be undone.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleDeleteUser}
            disabled={isDeleting}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
          >
            {isDeleting ? 'Deleting...' : 'Yes, Delete My Account'}
          </button>
          <button
            onClick={() => setShowConfirmation(false)}
            disabled={isDeleting}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-red-800 mb-4">
        🗑️ Delete Account
      </h3>
      <p className="text-red-700 mb-4">
        Permanently delete your account and all associated data. This action cannot be undone.
      </p>
      <button
        onClick={() => setShowConfirmation(true)}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Delete My Account
      </button>
    </div>
  );
}
