import {FC, useState, useEffect} from 'react'
import {Image, Pagination} from 'antd'
import _0 from '/images/0.jpg'
import _1 from '/images/1.jpg'
import _2 from '/images/2.jpg'
import _5 from '/images/5.jpg'
import _7 from '/images/7.jpg'
import _8 from '/images/8.jpg'
import _10 from '/images/10.jpg'
import _11 from '/images/11.jpg'
import _12 from '/images/12.jpg'
import _15 from '/images/15.jpg'
import _16 from '/images/16.jpg'
import _17 from '/images/17.jpg'
import _18 from '/images/18.jpg'
import _20 from '/images/20.jpg'
import _22 from '/images/22.jpg'
import _25 from '/images/25.jpg'
import _28 from '/images/28.jpg'
import _29 from '/images/29.jpg'
import _30 from '/images/30.jpg'
import _31 from '/images/31.jpg'
import _32 from '/images/32.jpg'
import _33 from '/images/33.jpg'
import _40 from '/images/40.jpg'
import _42 from '/images/42.jpg'
import _43 from '/images/43.jpg'
import _45 from '/images/45.jpg'
import _48 from '/images/48.jpg'
import _49 from '/images/49.jpg'
import _51 from '/images/51.jpg'
import _52 from '/images/52.jpg'
import _53 from '/images/53.jpg'
import _54 from '/images/54.jpg'
import _55 from '/images/55.jpg'
import _56 from '/images/56.jpg'
import _57 from '/images/57.jpg'
import _58 from '/images/58.jpg'
import _59 from '/images/59.jpg'
import _64 from '/images/64.jpg'
import _67 from '/images/67.jpg'

const imagesSrc = [
  _0,
  _1,
  _2,
  _5,
  _7,
  _8,
  _10,
  _11,
  _12,
  _15,
  _16,
  _17,
  _25,
  _18,
  _20,
  _22,
  _28,
  _29,
  _30,
  _31,
  _32,
  _33,
  _40,
  _42,
  _43,
  _45,
  _48,
  _49,
  _51,
  _52,
  _53,
  _54,
  _55,
  _56,
  _57,
  _58,
  _59,
  _64,
  _67
]

const descriptions = [
  'おばあちゃんの家の前です。',
  '遠くは私たちが車で来た通りです。',
  'おばあちゃんの家の裏です。私はここを散歩します。',
  '家ではいとこ達にウルトラマンを見せています。',
  '出発です。こちらは母の小学校です。今はもう荒れています。',
  'おばあちゃんの畑には、おいしい野菜がたくさんあります。',
  'これは秋の収穫が終わった畑です。',
  '祖母が育てていた油や洗髪用の植物です。',
  '前はここではよく虹が見えましたが,今では上流に水力発電所ができて,あまり見えません。',
  '母はとても興奮しているようで,まっすぐに歩いていきます。',
  '角を曲がると美しい景色が目に入ります。',
  'ふと気がつくと、空に月が出ていました。まだ午後3時です!',
  '月がきれいですね。',
  'おばあちゃんが植えていた、もうひとつの花です。使い道は忘れました！',
  'びっくりしました、これは何ですか？',
  '水牛でした。',
  '化粧気のない従妹の写真を撮ったら彼女は私を殴りました',
  '山いっぱいの砂糖オレンジです。とても甘いフルーツですよ。',
  'まだ先を行く母にはもう追いつけません。',
  '遠くの山々は本当に美しいですね。',
  '日差しがあぜ道に降りそそぐ',
  '遠くの山があまりにもきれいで,思わず母の写真を1枚撮ってしまいました。',
  '私',
  '乾きかけの小川。',
  '他人の家の釣り堀です。',
  '一本橋を渡って、どこへ行くんですか？',
  '人の家の木にみかんを取りに行きます。',
  'みかん泥棒の証拠を残します！（笑',
  '川沿いに生えている雑草は特別です。',
  'こっちも祖母の家の畑ばかりです。',
  '帰り道に水牛が何匹か草を食べに出てきました。',
  'もっと近います。',
  '自由ですね。',
  '私を見ていたのです。',
  '田舎の空はほんとうにきれいでした。',
  '単純にいいと思って撮りました。',
  'もう夜になりました、家に帰るつもりです、最後に空を見ましょう。',
  '空の大パノラマを撮ります。',
  '家に帰った月はこんなふうにぼやけていました。都市は本当に人々を見失います。',
]

const Gallery: FC = () => {

  const [current, setCurrent] = useState(1)

  const [showingImg, setShowingImg] = useState(imagesSrc.slice(0, 6))

  const [showingDescriptions, setShowingDescriptions] = useState(descriptions.slice(0, 6))

  useEffect(() => {
    setShowingImg(imagesSrc.slice((current - 1) * 6, current * 6))
    setShowingDescriptions(descriptions.slice((current - 1) * 6, current * 6))
  }, [current])

  return (
    <div className="flex flex-col my-8">
      <h2 className="flex justify-center items-center w-[80px] h-[46px] mb-6 rounded-full text-2xl bg-white/70 shadow-slate-200 shadow-md select-none cursor-default">写真</h2>
      <div className="flex flex-col p-6 items-center rounded-lg shadow-sm shadow-slate-400 bg-white/80">
        <div className="flex justify-center">
          <div className="grid gap-2 grid-cols-6">
            <Image.PreviewGroup>
              {showingImg.map((src, index) => {
                return (
                  <div className="flex flex-col items-center" key={src}>
                    <Image
                      src={src}
                      width={200}
                      height={90}
                      style={{objectFit: "cover"}}
                    ></Image>
                    <div className="w-[200px] px-3 py-1 mt-2 rounded-lg bg-slate-500/40 text-white">
                      {showingDescriptions[index]}
                    </div>
                  </div>
                )
              })}
            </Image.PreviewGroup>
          </div>
        </div>
        <Pagination
          className="mt-3"
          current={current}
          total={imagesSrc.length}
          pageSize={6}
          onChange={(page) => {
            setCurrent(page)
          }}
        ></Pagination>
      </div>
    </div>
  )
}

export default Gallery
