import type { FolderTypes } from "@/types/FolderTypes";

export function Folder({ folder }: { folder: FolderTypes }) {
  return (
    <div className="flex items-center gap-2 p-3 border rounded-full">
      <span className="text-2xl">📁</span>
      <p className="font-medium">{folder.name}</p>
    </div>
  );
}
