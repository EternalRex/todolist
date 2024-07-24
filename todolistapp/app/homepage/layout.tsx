import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <p>Root Layout</p>
      {children}
    </main>
  );
}
