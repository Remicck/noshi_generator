import { FormValue } from '@/type';

// フォームの初期値
export const initialFormValue: FormValue = {
  department: '',
  name: '佐藤 太郎',
  item: '一、金 五千円也',
};

// 納品物のリスト
export const ItemList: string[] = ['一、金 五千円也', '一、金 壱万円也', '清酒 一本', '焼酎 一本'];

// 文字サイズの標準値(rem)。スライダーの初期値・「デフォルトに戻す」で使用。
export const DEFAULT_NAME_FONT_SIZE = 8.4;
export const DEFAULT_ITEM_FONT_SIZE = 9.7;

// 「一、金 の直下」の余白の標準値(em)。マイナスで詰まる。スライダーで調整可能。
export const DEFAULT_ICHIKIN_GAP = 0.04;
