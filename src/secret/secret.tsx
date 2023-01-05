import { FC, memo, useEffect, useRef, useState } from "react";
import LineQR from '/qr2.jpg'
import WeChatQR from '/qr1.png'

const Secret: FC = () => {
  const [showNumber, setShowNumber] = useState(false)
  const [currentInput, setCurrentInput] = useState('')
  const initRef = useRef(false)

  useEffect(() => {
    if (initRef.current) return
    initRef.current = true
    document.body.addEventListener('keydown' ,({key}) => {
      console.log(key)
      setCurrentInput((state) => {
        return `${state}${key}`
      })
      setTimeout(() => {
        setCurrentInput('')
      }, 10000)
    })
  }, [])

  useEffect(() => {
    if (!currentInput) return
    console.log(currentInput)
    if (currentInput.toLocaleLowerCase() === 'wechat' || currentInput.toLocaleLowerCase() === 'line') {
      setShowNumber(true)
    }
  }, [currentInput])

  return showNumber ? (
    <div className="flex flex-col my-8">
      <h2 className="flex justify-center items-center w-[160px] h-[46px] mb-6 rounded-full text-2xl bg-white/70 shadow-slate-200 shadow-md select-none cursor-default">秘密の番号</h2>
      <div className="flex w-[1288px] p-6 items-center rounded-lg shadow-sm shadow-slate-400 bg-white/80">
        <div className="flex-1">
          WeChat
          <img src={WeChatQR}></img>
        </div>
        <div className="flex-1">
          Line
          <img src={LineQR}></img>
        </div>
      </div>
    </div>
  ) : <></>
}

export default memo(Secret)
