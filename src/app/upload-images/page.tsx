"use client";

import { useEffect, useState } from "react";
import { LoginForm } from "@/components/loginForm";
import { AmbassadorMediaForm } from "@/components/ui/ProfileForm";

export default function UploadImagesPage() {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for the logged in user in local storage.
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(storedUser);
    }
    // Set loading to false after checking.
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  // While loading, you can return a spinner or nothing
  if (loading) {
    return null; // or a loading indicator: <div>Loading...</div>
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {user ? (
        <div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg">Hi {user}!</p>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Logout
            </button>
          </div>
          <AmbassadorMediaForm ambassador={user} />
        </div>
      ) : (
        <LoginForm onLoginSuccess={(username) => setUser(username)} />
      )}
    </div>
  );
}
