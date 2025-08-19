import { FormValue } from '@/type';
import styles from './Preview.module.scss';
import clsx from 'clsx';
import noshiImage from '@/assets/noshi.png';
import { formatNumber, ichikinFormat } from '@/lib/formatter';

type PreviewProps = {
  formValue: FormValue;
  forceMincho: boolean;
  disableSama: boolean;
  disableBackground: boolean;
};
export function Preview(props: PreviewProps) {
  const { formValue, forceMincho, disableSama, disableBackground } = props;
  return (
    <div id="printableArea" className={clsx(styles.wrap, 'bg-white p-2 flex flex-row flex-nowrap')}>
      <div
        className={clsx(
          'w-[35%] flex items-center justify-start mt-[40px] mb-[20px]',
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
                  <div className="pb-10">{formValue.department}</div>
                  <div className="text-right">{formValue.name}</div>
                </div>
                {!disableSama && <div>様</div>}
              </div>
            ) : (
              <div className="flex justify-end h-full">
                {formatNumber(formValue.name)}
                {!disableSama && <div>様</div>}
              </div>
            )}
          </>
        ) : null}
      </div>
      <div className={clsx('w-[35%] flex items-center justify-start', styles.nouhinText)}>
        {formValue.item && <>{ichikinFormat(formValue.item)}</>}
      </div>
      <div
        className={clsx(
          'w-[28%] flex items-start justify-end mt-5',
          disableBackground && 'opacity-0'
        )}
      >
        <img src={noshiImage} alt="のし" className="w-1/2" />
      </div>
    </div>
  );
}
