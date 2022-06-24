import { List, X } from 'phosphor-react';
import { Logo } from './Logo';

interface HeaderProps {
  value: boolean;
  onChange: (prop: boolean) => void;
}

export function Header(props: HeaderProps) {
  return (
    <header className="w-full px-6 lg:px-0 py-5 flex items-center justify-between lg:justify-center bg-gray-700 border-b border-gray-600">
      <div className="w-[167px] lg:w-[237px]">
        <Logo />
      </div>
      <button
        onClick={() => props.onChange(!props.value)}
        className="flex items-center gap-2 lg:hidden"
      >
        Aulas
        {props.value ? (
          <X size={32} className="text-blue-500" />
        ) : (
          <List size={32} className="text-blue-500" />
        )}
      </button>
    </header>
  );
}
