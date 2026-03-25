import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ship Overseas with Confidence | Cross-Border Shipping Course Singapore",
  description:
    "Learn how to ship internationally with confidence. A practical one-day workshop for Singapore SME owners covering customs, duties, FedEx charges, fraud prevention and more. Powered by ShipAnywhere.",
  keywords:
    "cross-border shipping, international shipping course, Singapore SME, FedEx shipping, customs clearance, ShipAnywhere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
