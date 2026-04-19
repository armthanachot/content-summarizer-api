import ENV from "../pkg/env/env";

const presetsThemeUrl = ENV.PRESETS_THEME_URL
const presetsTheme = await fetch(presetsThemeUrl)

console.log(await presetsTheme.json());