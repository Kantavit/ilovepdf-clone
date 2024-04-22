import React from "react";
import ToolIcons from "./toolIcons";

export default function ToolCards({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="flex flex-col max-w-full w-full h-56 p-6 border-2 rounded-md bg-white hover:bg-indigo-50 border-white hover:border-indigo-50 shadow-lg transition ease-in duration-300 cursor-pointer"
      style={{ margin: "2px" }}
    >
      <ToolIcons iconName={icon} />
      <h1 className="font-bold text-xl mt-2 mb-2">{title}</h1>
      <p className="text-pretty text-xs text-left">{description}</p>
    </div>
  );
}
