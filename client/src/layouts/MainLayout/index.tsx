"use client"
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import StoreProvider, { useAppSelector } from "@/app/redux";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex flex-col w-full bg-gray-100 px-12">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <MainLayout>{children}</MainLayout>
    </StoreProvider>
  );
};

export default LayoutWrapper;
