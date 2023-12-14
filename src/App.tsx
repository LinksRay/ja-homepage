import BG from '/bg.jpg'
import Gallery from './gallery/gallery'
import Letter from './letter/letter'
import Secret from './secret/secret'

function App() {

  return (
    <div
      className="flex flex-col items-center min-h-screen w-full bg-fixed bg-contain bg-center"
      style={{backgroundImage: `url(${BG})`}}
    >
      <h1 className="px-8 py-3 my-8 bg-white/70 shadow-slate-200 shadow-md rounded-full text-black/75 text-4xl text-center select-none cursor-default">Welcome to my homepage!</h1>
      <Gallery></Gallery>
      <Letter></Letter>
      <Secret></Secret>
      <div className="flex flex-col my-8">
        <h2 className="flex justify-center items-center w-[350px] h-[46px] mb-6 rounded-full text-2xl bg-white/70 shadow-slate-200 shadow-md select-none cursor-default">Below now is unavailable...</h2>
        <div className="w-[1288px]"></div>
      </div>
    </div>
  )
}

export default App
