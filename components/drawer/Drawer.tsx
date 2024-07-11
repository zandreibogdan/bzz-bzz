"use client";

import React, { useState } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-25">
      <div className="flex justify-end">
        <div className="w-64 h-full bg-white p-4 overflow-y-auto">
          {children}
        </div>
        <div className="flex-1" onClick={onClose}></div>
      </div>
    </div>
  );
};

export default Drawer;
