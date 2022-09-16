import { THEME_AVAILABILITY } from "../lib/theming/Theme.types";

export const settingsMenuConfig = {
  tabs: [
    {
      icon: (style: Record<string, string>) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path d="M24 0H0v24h24z" />
            <path
              style={style}
              d="M12 2c5.523 0 10 4.477 10 10c0 .649-.062 1.284-.18 1.9c-.386 2.004-2.397 2.85-4.082 2.57l-1.74-.29a1.29 1.29 0 0 0-1.124.36c-.37.37-.547.879-.298 1.376c.423.846.429 1.812.055 2.603C14.131 21.58 13.11 22 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16l.195-.002c.258-.01.5-.06.628-.332a.993.993 0 0 0-.036-.855c-.63-1.262-.302-2.71.673-3.685a3.29 3.29 0 0 1 2.867-.919l1.74.29c.957.16 1.668-.348 1.789-.975A8 8 0 0 0 12 4Zm-4.5 7a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm7-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm-5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"
            />
          </g>
        </svg>
      ),
      title: "Appearance",
      description: "This changes how awesome Pluto looks in your eyes.",
      settings: {
        selected_theme: {
          label: "Active Theme",
        },
      },
    },
    {
      icon: (style: Record<string, string>) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            style={style}
            d="M10 11H7.101l.001-.009a4.956 4.956 0 0 1 .752-1.787a5.054 5.054 0 0 1 2.2-1.811c.302-.128.617-.226.938-.291a5.078 5.078 0 0 1 2.018 0a4.978 4.978 0 0 1 2.525 1.361l1.416-1.412a7.036 7.036 0 0 0-2.224-1.501a6.921 6.921 0 0 0-1.315-.408a7.079 7.079 0 0 0-2.819 0a6.94 6.94 0 0 0-1.316.409a7.04 7.04 0 0 0-3.08 2.534a6.978 6.978 0 0 0-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4l4-4zm4 2h2.899l-.001.008a4.976 4.976 0 0 1-2.103 3.138a4.943 4.943 0 0 1-1.787.752a5.073 5.073 0 0 1-2.017 0a4.956 4.956 0 0 1-1.787-.752a5.072 5.072 0 0 1-.74-.61L7.05 16.95a7.032 7.032 0 0 0 2.225 1.5c.424.18.867.317 1.315.408a7.07 7.07 0 0 0 2.818 0a7.031 7.031 0 0 0 4.395-2.945a6.974 6.974 0 0 0 1.053-2.503c.027-.135.043-.273.063-.41H22l-4-4l-4 4z"
          />
        </svg>
      ),
      title: "Updates",
      description: "It's important to keep your app up to date!",
      settings: {
        autoUpdate: {
          label: "Auto Update",
          description: "",
        },
      },
    },
  ],
};
