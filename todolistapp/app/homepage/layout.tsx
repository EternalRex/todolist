import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-green-600 h-full w-36 flex-1">
      <p>Root Layout</p>
      {children}
    </main>
  );
}
