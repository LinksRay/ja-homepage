import { Button } from "antd";
import { FC, memo, useState } from "react";
import EnvelopeBG from '/letter.jpg'
import IconClose from '/Icon_close.png'

const TKSRKK = `
　　先生、いつもありがとうございます。
　　私最初からは自信を持ってない人ですけど、先生ずっと応援しています。
　　おかげさまで、今たくさん話せることをできで自信も持っています。
　　去年三月から先生に勉強しています、そろそろ十ヶ月ですよね。時間の過ぎるのは本当に速いですよね。
　　先生は本当にやさしくて話と気持ちが分かる友たちです。会いたいですけど、今旅行のポリシーは大変です。もし五月にポリシーが大丈夫なら、私は日本に行きて先生と会いましょう！
`

const SZKRK = `
　　先生、いつもありがとうございます。
　　最初に先生を選んだのは、レッスンに選んでれる人が多方からです。レッスンした時、「やっばり特別です」って思った。
　　先生に勉強する時間が短いですが、先生の印象はとても深いです。かわいくて優しいです。勉強にたいしてすごく真面目そういう感じです。
　　もしいいければ、これからも一緒に勉強しましょう！もし旅行ポリシーがいいなら、将来先生と会えるのができますね。
`

interface EnvelopeProps {
  name: string
  content: string
}

const Envelope: FC<EnvelopeProps> = ({name, content}) => {
  const [isHover, setIsHover] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative w-full h-[300px] border border-[#FAE] rounded-xl bg-white bg-no-repeat bg-contain bg-center"
      style={{backgroundImage: `url(${EnvelopeBG})`}}
    >
      <div
        className="absolute h-[40px] w-[100px] leading-[40px] text-center top-[52%] left-[50%] translate-x-[-50%] rotate-[-12deg]"  
        onMouseEnter={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {isHover ? (
          <Button
            size="large"
            onMouseOver={() => setIsHover(true)}
            onClick={() => setIsOpen(true)}
          >開けます</Button>
        ): name}
      </div>
      <div className={`${isOpen ? 'w-[90%] h-[90%]' : 'w-0 h-0'} absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all bg-yellow-200/90 rounded-lg overflow-hidden`}>
        <div
          className="absolute left-[8px] top-[8px] rounded-full h-[24px] w-[24px] bg-white/70 text-black bg-[length:16px] bg-center cursor-pointer border border-gray-600"
          style={{backgroundImage: `url(${IconClose})`}}
          onClick={() => setIsOpen(false)}
        >
        </div>
        <pre className="h-full w-full pt-[36px] px-[20px] pb-[20px] text-purple-700 whitespace-pre-line overflow-auto">{content}</pre>
      </div>
    </div>
  )
}

const Letter: FC = () => {
  return (
    <div className="flex flex-col my-8">
      <h2 className="flex justify-center items-center w-[200px] h-[46px] mb-6 rounded-full text-2xl bg-white/70 shadow-slate-200 shadow-md select-none cursor-default">先生への言葉</h2>
      <div className="flex w-[1288px] p-6 items-center rounded-lg shadow-sm shadow-slate-400 bg-white/80">
        <div className="flex-1 mr-2">
          <Envelope name="TKSRKK" content={TKSRKK}></Envelope>
        </div>
        <div className="flex-1 ml-2">
          <Envelope name="SZKRK" content={SZKRK}></Envelope>
        </div>
      </div>
    </div>
  )
}

export default memo(Letter)
