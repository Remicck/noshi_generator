import { Input } from '@/components/ui/input';
import '@/App.scss';
import { Label } from '@/components/ui/label';
import { ItemList, initialFormValue } from '@/const';
import { ItemButton } from '@/components/ui/ItemButton';
import { useEffect, useState } from 'react';
import { FormValue } from '@/type';
import { Preview } from '@/components/Preview';

function App() {
  const [formValue, setFormValue] = useState<FormValue>(initialFormValue);
  const handleChangeFormValue = (key: keyof FormValue, e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue((prev) => ({ ...prev, [key]: e.target.value }));
  };
  const handleItemClick = (value: string) => {
    setFormValue((prev) => ({ ...prev, ['item']: value }));
  };

  return (
    <div className="p-2 h-screen">
      <div className="grid grid-cols-4 gap-2 min-h-full">
        {/* Left:: preview */}
        <div className="col-span-3 flex justify-center items-center rounded-lg bg-slate-50 p-2">
          <Preview formValue={formValue} />
        </div>
        {/* Right: Input */}
        <div className="min-h-full flex flex-col gap-4">
          <h2>入力</h2>
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
          </div>
          <div>
            <Label>納品（例：）</Label>
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
        </div>
      </div>
    </div>
  );
}

export default App;
