/* eslint-desable */
import { FaBackspace } from "react-icons/fa";


function BotoesTeclado() {
  return (
    <div className="grid grid-cols-3 w-52 p-4 gap-4 border ">
      <button className="bg-blue-500 text-white w-10 rounded">1</button>
      <button className="bg-blue-500 text-white w-10 rounded">2</button>
      <button className="bg-blue-500 text-white w-10 rounded">3</button>
      <button className="bg-blue-500 text-white w-10 rounded">4</button>
      <button className="bg-blue-500 text-white w-10 rounded">5</button>
      <button className="bg-blue-500 text-white w-10 rounded">6</button>
      <button className="bg-blue-500 text-white w-10 rounded">7</button>
      <button className="bg-blue-500 text-white w-10 rounded">8</button>
      <button className="bg-blue-500 text-white w-10 rounded">9</button>
      <button className="bg-blue-500 text-white w-10 rounded">0</button>
      <button className="bg-blue-500 text-white w-10 rounded">,</button>
      <button className="bg-blue-500 text-white w-10 rounded justify-center flex items-center">
        <FaBackspace />
      </button>
      <button className="bg-blue-500 text-white w-10 rounded">-</button>
      <div>
        <button className="bg-blue-500 text-white px-4 rounded">Nova Conversão</button>
      </div>
    </div>
  )
}

export default BotoesTeclado
