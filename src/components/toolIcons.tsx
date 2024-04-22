import React from "react";
import { IoIosApps } from "react-icons/io";

export default function ToolIcons({ iconName }: { iconName: string }) {
  switch (iconName) {
    case "image":
      return <IoIosApps style={{ width: 48, height: 48 }} />;
  }
}
