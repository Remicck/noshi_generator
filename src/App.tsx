import { Input } from '@/components/ui/input';
import '@/App.scss';
import { Label } from '@/components/ui/label';
import {
  ItemList,
  initialFormValue,
  DEFAULT_NAME_FONT_SIZE,
  DEFAULT_ITEM_FONT_SIZE,
  DEFAULT_ICHIKIN_GAP,
} from '@/const';
import { ItemButton } from '@/components/ui/ItemButton';
import { FormValue } from '@/type';
import { Preview } from '@/components/Preview';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useLocalStorageState } from '@/lib/useLocalStorageState';

function App() {
  // 設定値は localStorage に永続化し、リロードしても消えないようにする。
  const [formValue, setFormValue] = useLocalStorageState<FormValue>(
    'noshi:formValue',
    initialFormValue
  );
  const [forceMincho, setForceMincho] = useLocalStorageState<boolean>('noshi:forceMincho', false);
  const [disableSama, setDisableSama] = useLocalStorageState<boolean>('noshi:disableSama', false);
  const [disableBackground, setDisableBackground] = useLocalStorageState<boolean>(
    'noshi:disableBackground',
    false
  );
  const [nameFontSize, setNameFontSize] = useLocalStorageState<number>(
    'noshi:nameFontSize',
    DEFAULT_NAME_FONT_SIZE
  );
  const [itemFontSize, setItemFontSize] = useLocalStorageState<number>(
    'noshi:itemFontSize',
    DEFAULT_ITEM_FONT_SIZE
  );
  const [ichikinGap, setIchikinGap] = useLocalStorageState<number>(
    'noshi:ichikinGap',
    DEFAULT_ICHIKIN_GAP
  );
  const handleResetSizes = () => {
    setNameFontSize(DEFAULT_NAME_FONT_SIZE);
    setItemFontSize(DEFAULT_ITEM_FONT_SIZE);
    setIchikinGap(DEFAULT_ICHIKIN_GAP);
  };
  const handleChangeFormValue = (key: keyof FormValue, e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({ ...prev, [key]: e.target.value }));
  };
  const handleItemClick = (value: string) => {
    setFormValue((prev) => ({ ...prev, ['item']: value }));
  };
  const handlePrintClick = () => {
    window.print();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="p-2 h-[1100px] w-[1000px]">
        <div className="grid grid-cols-4 gap-2 min-h-full">
          {/* Left:: preview */}
          <div className="col-span-3 flex justify-center items-center rounded-lg p-2">
            <Preview
              formValue={formValue}
              forceMincho={forceMincho}
              disableSama={disableSama}
              disableBackground={disableBackground}
              nameFontSize={nameFontSize}
              itemFontSize={itemFontSize}
              ichikinGap={ichikinGap}
            />
          </div>
          {/* Right: Input */}
          <div className="h-full flex flex-col gap-4 bg-white p-2 rounded-lg">
            <h2 className="font-bold">入力スペース</h2>
            <div>
              <Label>所属（空欄可）</Label>
              <Input
                type="text"
                onChange={(e) => handleChangeFormValue('department', e)}
                value={formValue.department}
              />
            </div>
            <div>
              <Label>お名前</Label>
              <Input
                type="text"
                onChange={(e) => handleChangeFormValue('name', e)}
                value={formValue.name}
              />
              <div className="flex flex-row gap-2 mt-2">
                <Checkbox
                  id="disable-sama-flg"
                  checked={disableSama}
                  onCheckedChange={(checked: boolean) => {
                    setDisableSama(checked);
                  }}
                />
                <label
                  htmlFor="disable-sama-flg"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer select-none"
                >
                  様を表示しない
                </label>
              </div>
            </div>
            <div>
              <Label>納品</Label>
              <Input
                type="text"
                onChange={(e) => handleChangeFormValue('item', e)}
                value={formValue.item}
              />
              <div className="ml-2 mt-2 p-2 bg-slate-100 rounded-lg">
                <h4 className="text-sm font-bold">納品テンプレート</h4>
                <div className="flex flex-wrap gap-1">
                  {ItemList.map((item, index) => {
                    return (
                      <ItemButton key={index} onClick={() => handleItemClick(item)}>
                        {item}
                      </ItemButton>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="my-4 flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <Checkbox
                  id="force-mincho-flg"
                  checked={forceMincho}
                  onCheckedChange={(checked: boolean) => {
                    setForceMincho(checked);
                  }}
                />
                <label
                  htmlFor="force-mincho-flg"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer select-none"
                >
                  名前部分に明朝体を利用する
                  <br />
                  <span className="font-normal">
                    ※毛筆フォントで漢字が見つからない場合に利用ください
                  </span>
                </label>
              </div>
              <div className="flex flex-row gap-2">
                <Checkbox
                  id="disable-background-flg"
                  checked={disableBackground}
                  onCheckedChange={(checked: boolean) => {
                    setDisableBackground(checked);
                  }}
                />
                <label
                  htmlFor="disable-background-flg"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer select-none"
                >
                  背景を印刷に含めない
                </label>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="name-font-size"
                  className="text-sm font-medium leading-none select-none"
                >
                  名前の文字サイズ: {nameFontSize.toFixed(1)}rem
                </label>
                <input
                  id="name-font-size"
                  type="range"
                  min={4}
                  max={16}
                  step={0.1}
                  value={nameFontSize}
                  onChange={(e) => setNameFontSize(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="item-font-size"
                  className="text-sm font-medium leading-none select-none"
                >
                  納品の文字サイズ: {itemFontSize.toFixed(1)}rem
                </label>
                <input
                  id="item-font-size"
                  type="range"
                  min={4}
                  max={16}
                  step={0.1}
                  value={itemFontSize}
                  onChange={(e) => setItemFontSize(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="ichikin-gap"
                  className="text-sm font-medium leading-none select-none"
                >
                  一、金 の下の余白: {ichikinGap.toFixed(2)}em
                </label>
                <input
                  id="ichikin-gap"
                  type="range"
                  min={-1}
                  max={0.5}
                  step={0.02}
                  value={ichikinGap}
                  onChange={(e) => setIchikinGap(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
              </div>
              <Button variant="outline" className="w-full" onClick={handleResetSizes}>
                サイズ・字間をデフォルトに戻す
              </Button>
            </div>
            <Button className="w-full" onClick={handlePrintClick}>
              印刷
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
