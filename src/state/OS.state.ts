import { atom } from 'recoil';

export const CurrentOSState = atom({
    key: 'current_os',
    default: 'unknown'
});
