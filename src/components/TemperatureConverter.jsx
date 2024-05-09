/* eslint-desable */

import BotoesTeclado from "./BotoesTeclado"
import BotaoInput from "./BotaoInput"
import BotaoConverter from "./BotaoConverter"


function TemperatureConverter() {
  return (
    <div className='w-[600px] bg-gray-500 p-4 border-none rounded-md'>
      <h1 className="bg-slate-700 px-20 py-1 border text-center text-white rounded">Conversor de temperatura</h1>
      <aside className="flex justify-around p-3 gap-2">
        <div className="flex-col flex">
          <div className="w-full border p-2 gap-1 rounded">
            <BotaoInput />
          </div>
          <BotaoConverter />
        </div>
        <div>
          <BotoesTeclado />
        </div>
      </aside>
    </div>
  )
}

export default TemperatureConverter
