import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <p>Root Layout</p>
      {children}
    </main>
  );
}
