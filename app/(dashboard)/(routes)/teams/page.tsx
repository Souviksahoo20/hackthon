"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (session) {
      setUser(session.user);
    }
  }, [session]);

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <Link href="/dashboard">Back to Dashboard</Link>
    </div>
  );
}
