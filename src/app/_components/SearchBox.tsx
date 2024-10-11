'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const SearchBox = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className="flex items-center justify-between rounded p-2 flex-1 bg-gray-100"
      onClick={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="bg-transparent outline-none flex-1"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBox;
