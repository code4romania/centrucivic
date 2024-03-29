import React, { useState, useEffect } from 'react';
import CheckIcon from '@heroicons/react/solid/CheckIcon';
import { classNames } from '../../helpers/Tailwind.helper';

interface ChipSelectionProps {
  label: string;
  helperText: string;
  values: number[];
  readonly?: boolean;
  error?: string;
  defaultItem: number;
  onItemChange: (item: number) => void;
}

interface ChipProps {
  item: number;
  selected?: boolean;
  readonly?: boolean;
  onClick: (itemId: number) => void;
}

export const Chip = ({ item, selected, readonly, onClick }: ChipProps) => {
  return (
    <span
      className={classNames(
        selected ? 'font-semibold bg-green-50' : 'font-normal bg-gray-100',
        'h-fit inline-flex items-center px-5 py-2.5 rounded-3xl min-h-[2.25rem] text-sm text-gray-800 cursor-pointer',
      )}
      onClick={() => !readonly && onClick(item)}
    >
      {item}
      {selected && (
        <CheckIcon className="w-5 h-5 min-h-[1.25rem] min-w-[1.25rem] ml-2.5 text-green" />
      )}
    </span>
  );
};

const ChipSelection = ({
  label,
  helperText,
  defaultItem,
  onItemChange,
  values,
  error,
  readonly,
}: ChipSelectionProps) => {
  const [selectedItem, setSelectedItem] = useState<number>(defaultItem);

  useEffect(() => {
    if (!selectedItem && defaultItem) {
      setSelectedItem(defaultItem);
    }
  }, [defaultItem]);

  const isSelected = (item: number): boolean => {
    return selectedItem === item;
  };

  const onChipItemClick = (item: number) => {
    setSelectedItem(item);
    onItemChange(item);
  };

  return (
    <div>
      <label htmlFor="options__select" className="article text-gray-700">
        {label}
      </label>
      <div id="options__select" className="py-2 flex gap-x-2 gap-y-2 flex-wrap">
        {values.map((item) => (
          <Chip
            key={item}
            item={item}
            readonly={readonly}
            selected={isSelected(item)}
            onClick={onChipItemClick}
          />
        ))}
      </div>
      <div
        className={classNames(
          error ? 'text-red-500' : 'text-gray-500',
          'form-item-helper-text',
          readonly ? 'hidden' : 'block',
        )}
      >
        {error || helperText}
      </div>
    </div>
  );
};

export default ChipSelection;
