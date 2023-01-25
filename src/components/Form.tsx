import { PlusCircle } from "phosphor-react";

export function Form (){
  return (
    <div className="w-192 h-14 mx-auto ">
    <form className="flex gap-2">
      <input 
        className="w-159 h-14 border-2 p-4 bg-gray-500 border-gray-700 rounded-md absolute -translate-y-1/2 placeholder:text-gray-300 text-white font-size-16"
        type="text"  
        placeholder="Adicione uma nova tarefa" 
        name="name" 
        id="name" />

        <button 
          className="w-24 h-14 p-4 bg-blue-dark hover:bg-blue-light rounded-md ml-160 content-end -translate-y-1/2 text-white font-bold font-size-14 flex justify-between items-center"
          type="submit"
        >
          Criar 
          <PlusCircle 
            size={24}
            weight="bold"
            className=""/>
        </button>
    </form>

    </div>
  )
}