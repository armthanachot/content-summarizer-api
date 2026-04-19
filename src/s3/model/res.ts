import { t, Static } from "elysia";

const PresetsThemeResponse = t.Object({
    files: t.Array(t.String()),
})

export type PresetsThemeResponse = Static<typeof PresetsThemeResponse>