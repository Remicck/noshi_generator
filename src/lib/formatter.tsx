export function ichikinFormat(str: string, verticalNumber = false): JSX.Element | string {
  // strに '一金' が含まれている場合は
  if (str.includes('一、金')) {
    // 一金ぶぶんとそれ以外の部分で分ける
    const [_ichikin, other] = str.split('一、金');
    // 「一、金」の詰め配置は em ベースで固定する。フォントサイズ(スライダー)を
    // 変えても比率が保たれ、常に狭く詰まった見た目になる。
    // (元は rem 固定で、拡大時に詰めが崩れていた)
    return (
      <>
        <span>一</span>
        <span className="my-[-0.44em]">、</span>
        <span className="mt-[-0.22em] mb-[0.22em]">金</span>
        {formatNumber(other, verticalNumber)}
      </>
    );
  }
  return str;
}

// 金額部分(一、金 の下)の字間詰め。フォントを大きくすると1文字ずつのspanの
// 縦方向の余白が空きすぎてはみ出すため、マイナスの marginTop で打ち消す。
// em 基準にしてフォントサイズに追従させる(接頭辞「一、金」は ichikinFormat 側で調整済み)。
const NUMBER_TIGHTEN = '-0.1em';

export function formatNumber(str: string, verticalNumber = false): JSX.Element {
  // 半角数字の場合、通常は90度回転させて表示する。
  // verticalNumber が true のときは回転させず直立で縦に積む。
  return (
    <>
      {str.split('').map((char, index) => {
        const isDigit = !!char.match(/[0-9]/);
        const rotate = isDigit && !verticalNumber;
        return (
          <span
            key={index}
            className="text-center"
            style={{
              // 回転する半角数字は回転補正の余白が要るため詰めない。それ以外は字間を詰める。
              marginTop: rotate ? '0.25rem' : NUMBER_TIGHTEN,
              transform: rotate ? 'rotate(-90deg)' : 'none',
              textOrientation: isDigit && verticalNumber ? 'upright' : undefined,
            }}
          >
            {char}
          </span>
        );
      })}
    </>
  );
}
