import ClipboardImg from '../assets/clipboard.svg'

export function Tasks (){
  return(
    <div className="w-192 h-72 flex justify-between mx-auto border-2 border-red-500">
      <span className="w-192  flex justify-between mx-auto">
        <h1 className="font-bold text-blue-light flex gap-2">Tarefas criadas
          <div className="w-7 h-6 bg-gray-400 rounded-full" >
            <h1 className="text-white text-s font-bold flex justify-center my-auto">0</h1>
          </div>
        </h1>
        <h1 className="font-bold text-purple-dark flex gap-2">Concluídas
          <div className="w-7 h-6 bg-gray-400 rounded-full" >
            <h1 className="text-white text-s font-bold flex justify-center my-auto">0</h1>
          </div>
        </h1>
      </span>
      
      <span className='flex border-2 border-yellow-500'>
        <img className="w-14 h-14" src={ClipboardImg} alt="Clipboard" />
      </span>

      </div>
  )
}