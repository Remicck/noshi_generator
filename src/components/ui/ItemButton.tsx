import { Button } from '@/components/ui/button';

type ItemButtonProps = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function ItemButton(props: ItemButtonProps) {
  const { children, onClick } = props;
  return (
    <Button type="button" variant="outline" onClick={onClick}>
      {children}
    </Button>
  );
}
