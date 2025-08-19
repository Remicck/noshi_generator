import { Input } from '@/components/ui/input';
import '@/App.scss';
import { Label } from '@/components/ui/label';
import { ItemList, initialFormValue } from '@/const';
import { ItemButton } from '@/components/ui/ItemButton';
import { useState } from 'react';
import { FormValue } from '@/type';
import { Preview } from '@/components/Preview';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

function App() {
  const [formValue, setFormValue] = useState<FormValue>(initialFormValue);
  const [forceMincho, setForceMincho] = useState<boolean>(false);
  const [disableSama, setDisableSama] = useState<boolean>(false);
  const [disableBackground, setDisableBackground] = useState<boolean>(false);
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
