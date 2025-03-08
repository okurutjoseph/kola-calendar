import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Kola Calendar",
  description: "Manage your content calendar dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
} 