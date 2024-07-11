"use client";

import BeeButton from "@/components/bee-button/BeeButton";
import Drawer from "@/components/drawer/Drawer";
import React, { useState } from "react";

export default function Products() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={openDrawer}
      >
        Open Drawer
      </button>
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
        <p>This is the content inside the drawer!</p>
        <button
          className="px-4 py-2 mt-4 bg-red-500 text-white rounded"
          onClick={closeDrawer}
        >
          Close Drawer
        </button>
      </Drawer>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <BeeButton
          variant="primary"
          size="small"
          onClick={() => alert("Primary Small")}
        >
          Primary Small
        </BeeButton>
        <BeeButton
          variant="secondary"
          size="medium"
          onClick={() => alert("Secondary Medium")}
          className="mt-4"
        >
          Secondary Medium
        </BeeButton>
        <BeeButton
          variant="danger"
          size="large"
          onClick={() => alert("Danger Large")}
          className="mt-4"
        >
          Danger Large
        </BeeButton>
      </div>
    </div>
  );
}
