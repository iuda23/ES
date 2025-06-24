import React from "react";

export default function Footer({ text }) {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
        <p>{text}</p>
      </div>
    </footer>
  );
}