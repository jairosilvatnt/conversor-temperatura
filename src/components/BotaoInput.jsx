/* eslint-desable */
function BotaoInput() {
  return (
    <div>
      <div className="w-full flex justify-between ">
        <button className="rounded-full "><input id='user-temp' className="border-b bg-gray-500 " /></button>
        <select className="rounded border bg-gray-500">
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>
      </div >
    </div>
  )
}

export default BotaoInput
