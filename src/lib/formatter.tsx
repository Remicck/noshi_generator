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
        <span> {other}</span>
      </>
    );
  }
  return str;
}
