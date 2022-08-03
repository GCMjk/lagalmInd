import { useState } from 'react';
import { SearchIcon, XIcon } from '@heroicons/react/outline';

const InputSearchUI = ({ toSearch }: { toSearch: string }) => {
  const [icon, setIcon] = useState(true);
  const [text, setText] = useState('');

  const handleTextChange = (e: any) => {
    setText(e.target.value);
    e.target.value === '' ? setIcon(true) : setIcon(false);
  };

  const handleIconChange = () => {
    setIcon((prevState) => !prevState);
    setText('');
  };

  console.log(text);

  return (
    <div className="group flex justify-between h-8 w-full rounded-full border text-gray-500 md:h-10 focus-within:border-primary shadow transition-all duration-300">
      <div className="w-full flex justify-start items-center ml-4">
        <input
          value={text}
          onChange={handleTextChange}
          type="text"
          placeholder={`Buscar ${toSearch}...`}
          className="outline-none placeholder-gray-300 placeholder:text-sm placeholder:tracking-wider w-full"
        />
      </div>
      <div className="flex justify-end items-center mr-4">
        {icon ? (
          <SearchIcon className="h-4 hover:cursor-pointer text-secondary transition-all duration-300" />
        ) : (
          <button onClick={handleIconChange}>
            <XIcon className="h-4 hover:cursor-pointer text-secondary transition-all duration-300" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputSearchUI;
