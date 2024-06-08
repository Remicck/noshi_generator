import { FormValue } from '@/type';
import styles from './Preview.module.scss';
import clsx from 'clsx';
import noshiImage from '@/assets/noshi.png';

type PreviewProps = {
  formValue: FormValue;
};
export function Preview(props: PreviewProps) {
  const { formValue } = props;
  console.log(formValue);
  return (
    <div className={clsx(styles.wrap, 'bg-white p-2 flex flex-row flex-nowrap')}>
      <div className={clsx('w-[35%] flex items-center justify-start mt-[40px]', styles.text)}>
        {formValue.name}様
      </div>
      <div className={clsx('w-[35%] flex items-center justify-start', styles.text)}>
        {formValue.item}也
      </div>
      <div className={clsx('w-[30%] flex items-start justify-end')}>
        <img src={noshiImage} alt="のし" className="w-1/2" />
      </div>
    </div>
  );
}
