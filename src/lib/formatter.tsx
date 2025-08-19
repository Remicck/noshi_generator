export function ichikinFormat(str: string): JSX.Element | string {
  // strに '一金' が含まれている場合は
  if (str.includes('一、金')) {
    // 一金ぶぶんとそれ以外の部分で分ける
    const [_ichikin, other] = str.split('一、金');
    return (
      <>
        <span>一</span>
        <span className="my-[-4rem]">、</span>
        <span className="mt-[-2rem] mb-[2rem]">金</span>
        {formatNumber(other)}
      </>
    );
  }
  return str;
}

export function formatNumber(str: string): JSX.Element {
  // 半角数字の場合は、90度回転させて表示する
  return (
    <>
      {str.split('').map((char, index) => (
        <span
          key={index}
          className="text-center"
          style={{
            marginTop: char.match(/[0-9]/) ? '0.25rem' : '0',
            transform: char.match(/[0-9]/) ? 'rotate(-90deg)' : 'none',
          }}
        >
          {char}
        </span>
      ))}
    </>
  );
}
