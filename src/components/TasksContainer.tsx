import Clipboard from 'phosphor-react'

export function TasksContainer (){
  return(
  <div>  
    <div className='flex justify-between items-start pb-8 text-xs'>
      <div>
          <a className='text-blue-light font-bold'>Tarefas Criadas</a> <span className="bg-gray-400  pl-1 pt-2 gap-3 rounded-full ml-2 align-middle h-4 w-6 absolute inline-flex">
            <a className='text-gray-200 font-bold -mt-2 ml-1'>0 </a>
            </span>
      </div>
      <div>
          <a className='text-purple-light font-bold mr-[4.5rem]'>Concluídas</a> <span className="bg-gray-400 -ml-[4.1rem]  pt-2 gap-3 rounded-full  align-middle h-4 w-[3rem] absolute inline-flex">
            <a className='text-gray-200 font-bold -mt-2 ml-1'>0 de 5 </a>
            </span>
      </div>
    </div>
  </div>
  )
}