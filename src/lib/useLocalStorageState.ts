import { useEffect, useState } from 'react';

// localStorage に値を永続化する useState。
// リロードしても設定(サイズ・オプション・入力値)が消えないようにする。
export function useLocalStorageState<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? (JSON.parse(stored) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // storage 無効/容量超過などは無視(保存できなくても動作は継続)
    }
  }, [key, value]);

  return [value, setValue];
}
