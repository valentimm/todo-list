import { Trash } from "phosphor-react" 

export function Task() {
  return (
    <div className="flex flex-row justify-between flex-start p-4 bg-gray-500 rounded-lg">
      <div className="flex flex-row gap-2">
        <input type="checkbox" className="w-6 h-6 rounded-full align-middle border-solid border-4 border-blue-light" />
        <label className="text-gray-100 ml-2 line-through">Integer urna inter massa libero autor neque tur tur semper. Dis vel sed fames integer. Matheus MatheusMatheus Matheus</label>
        <Trash size={24} className="text-gray-300 block rounded hover:bg-gray-400 hover:text-red-danger transition duration-300" />
      </div>
    </div>
  );
}