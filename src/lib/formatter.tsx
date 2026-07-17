export function ichikinFormat(str: string, verticalNumber = false): JSX.Element | string {
  // strに '一金' が含まれている場合は
  if (str.includes('一、金')) {
    // 一金ぶぶんとそれ以外の部分で分ける
    const [_ichikin, other] = str.split('一、金');
    return (
      <>
        <span>一</span>
        <span className="my-[-4rem]">、</span>
        <span className="mt-[-2rem] mb-[2rem]">金</span>
        {formatNumber(other, verticalNumber)}
      </>
    );
  }
  return str;
}

export function formatNumber(str: string, verticalNumber = false): JSX.Element {
  // 半角数字の場合、通常は90度回転させて表示する。
  // verticalNumber が true のときは回転させず直立で縦に積む。
  return (
    <>
      {str.split('').map((char, index) => {
        const isDigit = !!char.match(/[0-9]/);
        return (
          <span
            key={index}
            className="text-center"
            style={{
              marginTop: isDigit && !verticalNumber ? '0.25rem' : '0',
              transform: isDigit && !verticalNumber ? 'rotate(-90deg)' : 'none',
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
