import { atom } from 'recoil';
import { NavTabs } from '../@types/ui.types';

export const ActiveTabState = atom<NavTabs>({
    key: 'active-nav-tab',
    default: NavTabs.Workspace
});
