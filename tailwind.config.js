const { tokens } = require('@fluentui/react-components');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "teams-bg-1": tokens.colorNeutralBackground1,
        "teams-bg-3": tokens.colorNeutralBackground3,
      },
      color: {
        "teams-fg-1": tokens.colorNeutralForeground1,
        "teams-fg-3": tokens.colorNeutralForeground3,
      },
    },
  },
  plugins: [],
};
