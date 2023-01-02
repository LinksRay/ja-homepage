import BG from '/bg.jpg'
import Gallery from './gallery/gallery'

function App() {

  return (
    <div
      className="flex flex-col items-center h-[100vh] w-[100vw] bg-fixed bg-contain bg-center"
      style={{backgroundImage: `url(${BG})`}}
    >
      <h1 className="px-8 py-3 my-8 bg-white/70 shadow-slate-200 shadow-md rounded-full text-black/75 text-4xl text-center select-none cursor-default">Welcome to my homepage!</h1>
      <Gallery></Gallery>
    </div>
  )
}

export default App
