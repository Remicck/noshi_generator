import { FormValue } from '@/type';
import styles from './Preview.module.scss';
import clsx from 'clsx';
import noshiImage from '@/assets/noshi.png';

type PreviewProps = {
  formValue: FormValue;
  forceMincho: boolean;
};
export function Preview(props: PreviewProps) {
  const { formValue, forceMincho } = props;
  console.log(formValue);
  return (
    <div className={clsx(styles.wrap, 'bg-white p-2 flex flex-row flex-nowrap')}>
      <div
        className={clsx(
          'w-[35%] flex items-center justify-start mt-[40px]',
          styles.text,
          forceMincho && styles.mincho
        )}
      >
        {formValue.name ? (
          <>
            {formValue.department ? (
              <div
                className={clsx(
                  'flex flex-row items-center justify-end h-full pb-10',
                  styles.smallText
                )}
              >
                <div className="flex flex-col">
                  <div>{formValue.department}</div>
                  <div className="pt-10">{formValue.name}</div>
                </div>
                <div>様</div>
              </div>
            ) : (
              <div className="flex justify-end h-full">{formValue.name}様</div>
            )}
          </>
        ) : null}
      </div>
      <div className={clsx('w-[35%] flex items-center justify-start', styles.text)}>
        {formValue.item && <>{formValue.item}也</>}
      </div>
      <div className={clsx('w-[30%] flex items-start justify-end')}>
        <img src={noshiImage} alt="のし" className="w-1/2" />
      </div>
    </div>
  );
}
