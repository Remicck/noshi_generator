import { DEFAULT_ICHIKIN_GAP } from '@/const';

// 金額文字どうしの字間詰め(固定)。フォントを大きくすると1文字ずつのspanの縦余白が
// 空きすぎるため、マイナスの marginTop(em)で打ち消す。em 基準でフォントサイズに追従。
const AMOUNT_TIGHTEN = '-0.1em';

export function ichikinFormat(
  str: string,
  ichikinGap: number = DEFAULT_ICHIKIN_GAP
): JSX.Element | string {
  // strに '一金' が含まれている場合は
  if (str.includes('一、金')) {
    // 一金ぶぶんとそれ以外の部分で分ける
    const [_ichikin, other] = str.split('一、金');
    // 「一、金」の詰め配置は em ベースで固定する。フォントサイズ(スライダー)を
    // 変えても比率が保たれ、常に狭く詰まった見た目になる。
    // ichikinGap は「一、金 の直下の余白」だけを調整する(金額内部の字間は動かさない)。
    return (
      <>
        <span>一</span>
        <span className="my-[-0.44em]">、</span>
        <span className="mt-[-0.22em] mb-[0.22em]">金</span>
        {formatNumber(other, ichikinGap)}
      </>
    );
  }
  return str;
}

// firstGap を渡すと、金額先頭文字の上余白(=「一、金 の下」の1箇所)だけをその値にする。
// 渡さない場合(名前など)は先頭も他と同じ固定字間になる。
export function formatNumber(str: string, firstGap?: number): JSX.Element {
  // 半角数字は90度回転させて表示する。
  return (
    <>
      {str.split('').map((char, index) => {
        const isDigit = !!char.match(/[0-9]/);
        let marginTop: string;
        if (isDigit) {
          marginTop = '0.25rem'; // 回転補正の余白が要るため詰めない
        } else if (index === 0 && firstGap !== undefined) {
          marginTop = `${firstGap}em`; // 「一、金 の下」の余白のみスライダーで調整
        } else {
          marginTop = AMOUNT_TIGHTEN; // それ以外は固定の字間詰め
        }
        return (
          <span
            key={index}
            className="text-center"
            style={{
              marginTop,
              transform: isDigit ? 'rotate(-90deg)' : 'none',
            }}
          >
            {char}
          </span>
        );
      })}
    </>
  );
}
