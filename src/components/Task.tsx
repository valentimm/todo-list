import { Trash } from "phosphor-react" 

export function Task() {
  return (
    <div className="w-184 h-20 mx-auto flex items-center justify-between bg-gray-500 rounded-lg">
      <div className="flex items-start justify-between rounded-full p-1">
        <input type="checkbox" className="w-5 h-5 rounded-full mt-4" />
        <p className="text-gray-100 ml-2 ">Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
        <Trash size={24} className="text-gray-300 justify-end mt-3 rounded-md hover:bg-gray-400 hover:text-red-danger" />
      </div>
    </div>
  );
}