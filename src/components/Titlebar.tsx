import { appWindow } from '@tauri-apps/api/window';
import { useEffect } from 'react';

import Logo from '../assets/pluto-logo-icon.svg';
import LogoText from '../assets/pluto-logo-text.svg';
import { TitlebarDropdown } from './TitlebarDropdown';
import { PlutoLibContext } from '../state/PlutoLib.state';
import { pluto_titlebar_config } from '../constants/pluto-titlebar.config';
// @ts-ignore
import Style from 'style-it';
import { ClickedDropdownItemEmitter } from '../state/Titlebar.state';

export const Titlebar = () => {
    useEffect(() => {
        document
            .getElementById('titlebar-minimize')
            ?.addEventListener('click', () => appWindow.minimize());
        document
            .getElementById('titlebar-maximize')
            ?.addEventListener('click', () => appWindow.toggleMaximize());
        document
            .getElementById('titlebar-close')
            ?.addEventListener('click', () => appWindow.close());
    }, []);

    return (
        <PlutoLibContext.Consumer>
            {plutoLib => (
                <Style>
                    {`
              .titlebar-button:hover {
                background: ${
                    plutoLib?.Theme.getHoverClassName('titlebar.button')[
                        'background'
                    ]
                };
              }
          `}
                    <div
                        data-tauri-drag-region
                        className="h-[40px] flex justify-between"
                        style={plutoLib?.Theme.getClassName('title-bar')}
                    >
                        <div
                            data-tauri-drag-region
                            className="left p-1 ml-2 flex-1 flex items-center"
                            style={plutoLib?.Theme.getClassName(
                                'titlebar.logo'
                            )}
                        >
                            <img
                                src={Logo}
                                alt="Pluto"
                                className="h-full p-1 mt-1"
                            />
                            <TitlebarDropdown
                                title="File"
                                config={pluto_titlebar_config[0]}
                            />
                            <TitlebarDropdown
                                title="Edit"
                                config={pluto_titlebar_config[1]}
                            />
                            <TitlebarDropdown
                                title="View"
                                config={pluto_titlebar_config[2]}
                            />
                            <TitlebarDropdown
                                title="Git"
                                config={pluto_titlebar_config[3]}
                            />
                            <TitlebarDropdown
                                title="Terminal"
                                config={pluto_titlebar_config[4]}
                            />
                            <TitlebarDropdown
                                title="Help"
                                config={pluto_titlebar_config[5]}
                            />
                        </div>
                        <div
                            data-tauri-drag-region
                            className="middle flex-1 flex items-center justify-center"
                        >
                            <img
                                src={LogoText}
                                alt="Pluto"
                                className="h-full"
                            />
                        </div>
                        <div
                            className="right flex-1 flex items-center justify-end"
                            data-tauri-drag-region
                        >
                            <div
                                className="titlebar-button p-4 px-4 flex items-center justify-center h-full transition-all"
                                style={plutoLib?.Theme.getClassName(
                                    'titlebar.button'
                                )}
                                onClick={() => {
                                    ClickedDropdownItemEmitter.emit(
                                        'ITEM_CLICKED',
                                        {
                                            dropdownKey: 'settings'
                                        }
                                    );
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18px"
                                    height="18px"
                                    className="min-w-[18px]"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                    style={plutoLib?.Theme.getClassName(
                                        'titlebar.icon'
                                    )}
                                >
                                    <path
                                        style={plutoLib?.Theme.getClassName(
                                            'titlebar.icon'
                                        )}
                                        d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2s-2-.916-2-2s.916-2 2-2z"
                                    />
                                    <path
                                        style={plutoLib?.Theme.getClassName(
                                            'titlebar.icon'
                                        )}
                                        d="m2.845 16.136l1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65l.998-1.729l1.145.662a.997.997 0 0 0 1.188-.142a6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956a6.083 6.083 0 0 1 2.384 1.399a.999.999 0 0 0 1.188.142l1.144-.661l1 1.729l-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378c0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649l-.998 1.729l-1.145-.661a.996.996 0 0 0-1.188.142a6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956a6.083 6.083 0 0 1-2.384-1.399a.992.992 0 0 0-1.188-.141l-1.144.662l-1-1.729l1.124-.651a1 1 0 0 0 .471-1.108z"
                                    />
                                </svg>
                            </div>
                            <div
                                id="titlebar-minimize"
                                className="titlebar-button p-4 px-4 flex items-center justify-center h-full transition-all"
                                style={plutoLib?.Theme.getClassName(
                                    'titlebar.button'
                                )}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15px"
                                    height="15px"
                                    className="min-w-[15px]"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 1024 1024"
                                    style={plutoLib?.Theme.getClassName(
                                        'titlebar.icon'
                                    )}
                                >
                                    <path
                                        style={plutoLib?.Theme.getClassName(
                                            'titlebar.icon'
                                        )}
                                        d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
                                    />
                                </svg>
                            </div>
                            <div
                                id="titlebar-maximize"
                                className={`titlebar-button p-4 px-4 flex items-center justify-center h-full transition-all`}
                                style={plutoLib?.Theme.getClassName(
                                    'titlebar.button'
                                )}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15px"
                                    height="15px"
                                    className="min-w-[15px]"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                    style={plutoLib?.Theme.getClassName(
                                        'titlebar.icon'
                                    )}
                                >
                                    <path
                                        style={plutoLib?.Theme.getClassName(
                                            'titlebar.icon'
                                        )}
                                        d="M5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75A2.75 2.75 0 0 1 5.75 3Zm0 1.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25H5.75Z"
                                    />
                                </svg>
                            </div>
                            <div
                                className="p-4 px-4 flex items-center justify-center h-full hover:bg-red-600 transition-all"
                                id="titlebar-close"
                                style={plutoLib?.Theme.getClassName(
                                    'titlebar.button'
                                )}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22px"
                                    height="22px"
                                    className="min-w-[22px]"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 36 36"
                                >
                                    <path
                                        fill="white"
                                        d="m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z"
                                        className="clr-i-outline clr-i-outline-path-1"
                                    />
                                    <path fill="none" d="M0 0h36v36H0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Style>
            )}
        </PlutoLibContext.Consumer>
    );
};
