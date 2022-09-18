import { useContext, useState } from 'react';
import { useRecoilState } from 'recoil';
import { NavTabs } from '../@types/ui.types';
import { PlutoLibContext } from '../state/PlutoLib.state';
import { ActiveTabState } from '../state/UI.state';
import { NavButtonBarButton } from './NavButtonBarButton';

export const NavButtonBar = () => {
    const [activeTab, setActiveTab] = useRecoilState(ActiveTabState);
    const plutoLib = useContext(PlutoLibContext);

    return (
        <div
            className="flex flex-col min-w-[4vw] h-full"
            style={plutoLib.Theme.getClassName('nav-button-bar')}
        >
            <NavButtonBarButton
                plutoLib={plutoLib}
                setActiveTab={setActiveTab}
                active={activeTab === NavTabs.Workspace}
                name={NavTabs.Workspace}
                Icon={() => (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35px"
                        height="35px"
                        className="min-w-[35px] h-auto"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 21 21"
                    >
                        <g
                            fill="none"
                            fillRule="evenodd"
                            style={plutoLib.Theme.getClassName(
                                'nav-button-bar-button'
                            )}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M17.5 14.5v-7l-5-5h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z" />
                            <path d="M3.5 4.5v10a4 4 0 0 0 4 4h8m-3-16v3a2 2 0 0 0 2 2h3" />
                        </g>
                    </svg>
                )}
            />
            <NavButtonBarButton
                plutoLib={plutoLib}
                setActiveTab={setActiveTab}
                active={activeTab === NavTabs.Search}
                name={NavTabs.Search}
                Icon={() => (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35px"
                        height="35px"
                        className="min-w-[35px] h-auto"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                    >
                        <path
                            style={plutoLib.Theme.getClassName(
                                'nav-button-bar-button'
                            )}
                            d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392l.604.646l2.121-2.121l-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5z"
                        />
                    </svg>
                )}
            />
        </div>
    );
};
