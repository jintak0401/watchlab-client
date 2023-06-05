'use client';

import { useSetAtom } from 'jotai';
import 'twin.macro';

import { profileSortAtom } from '@/store/profile';

const ProfileSortButtons = () => {
  const setProfiles = useSetAtom(profileSortAtom);

  const sortAtoZ = () => {
    setProfiles('a2z');
  };
  const sortZtoA = () => {
    setProfiles('z2a');
  };
  const sortByEstablishedAt = () => {
    setProfiles('establishedAt');
  };

  const buttonsData = [
    {
      label: 'Sort A to Z',
      onClick: sortAtoZ,
    },
    {
      label: 'Sort Z to A',
      onClick: sortZtoA,
    },
    {
      label: 'Sort by Age',
      onClick: sortByEstablishedAt,
    },
  ];

  return (
    <div tw="flex items-center justify-center gap-5">
      {buttonsData.map(({ label, onClick }) => (
        <button
          tw="w-52 border border-black py-2 text-2xl hover:(bg-black bg-opacity-10)"
          key={label}
          onClick={onClick}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ProfileSortButtons;
