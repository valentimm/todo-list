import { Trash } from "phosphor-react" 

export function Task() {
  return (
    <div className="w-184 h-20 mx-auto -mt-4 flex items-center justify-between bg-gray-500 rounded-lg">
      <div className="flex items-start justify-between rounded-full p-1">
        <input type="checkbox" className="w-5 h-5 mt-4 place-self-center" />
        <label className="text-gray-100 ml-2 line-through">Integer urna inter massa libero autor neque tur tur semper. Dis vel sed fames integer.</label>
        <Trash size={24} className="text-gray-300 justify-end mt-3 rounded-md hover:bg-gray-400 hover:text-red-danger" />
      </div>
    </div>
  );
}