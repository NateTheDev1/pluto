import { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { NavTabs } from '../@types/ui.types';
import { PlutoLib } from '../lib/PlutoLib';

export const NavButtonBarButton = ({
    plutoLib,
    Icon,
    active,
    name,
    setActiveTab
}: {
    plutoLib: PlutoLib;
    Icon: any;
    name: NavTabs;
    active: boolean;
    setActiveTab: (v: NavTabs) => void;
}) => {
    const [opacityStyles, setOpacityStyles] = useState({});

    useEffect(() => {
        if (active) {
            setOpacityStyles({
                opacity: 1,
                ...plutoLib.Theme.getHoverClassName('nav-button-bar-container')
            });
        } else {
            setOpacityStyles({});
        }
    }, []);

    return (
        <div
            onClick={() => setActiveTab(name)}
            data-for="main"
            data-tip={NavTabs[name].toString()}
            className="mb-2 transition-all cursor-pointer hover:opacity-100  opacity-60 w-full p-4 flex items-center justify-center"
            style={{
                ...plutoLib.Theme.getClassName('nav-button-bar-container'),
                ...opacityStyles
            }}
        >
            <ReactTooltip
                id="main"
                place="right"
                effect="solid"
                backgroundColor="rgba(0, 0, 0, 0.2)"
            />
            <Icon />
        </div>
    );
};
