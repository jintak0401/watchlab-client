import { atom, useAtomValue, useSetAtom } from 'jotai';
import { useMemo } from 'react';
import 'twin.macro';

import { profileAtom } from '@/store/profile';

const ProfileSortButtons = () => {
  const _profileAtom = useMemo(() => {
    return atom((get) => get(profileAtom));
  }, []);
  const profiles = useAtomValue(_profileAtom);
  const setProfiles = useSetAtom(profileAtom);

  const sortAtoZ = () => {
    setProfiles(profiles.sort((a, b) => a.name.localeCompare(b.name)));
  };
  const sortZtoA = () => {
    setProfiles(profiles.sort((a, b) => b.name.localeCompare(a.name)));
  };
  const sortByEstablishedAt = () => {
    setProfiles(profiles.sort((a, b) => a.establishedAt - b.establishedAt));
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
