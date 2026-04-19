import { t, Static } from "elysia";

export const UploadFileRequest = t.Object({
    file: t.File({
        contentType: "application/json",
    }), 
    fileName: t.String({
        pattern: "^[a-zA-Z0-9_-]+\.json$",
    }),
})

export const ThemeStructureRequest = t.Object({
    key: t.String({ default: "cosmic-blueberry" }),
    label: t.String({ default: "Cosmic Blueberry" }),
    summary: t.Object({
        modalBackground: t.String({ default: "#F0F4FF" }),
        textColor: t.String({ default: "#1A237E" }),
        headerStart: t.String({ default: "#3F51B5" }),
        headerEnd: t.String({ default: "#283593" }),
        headerText: t.String({ default: "#E8EAF6" }),
        inputBackground: t.String({ default: "#FFFFFF" }),
        inputBorder: t.String({ default: "#C5CAE9" }),
        primaryStart: t.String({ default: "#5C6BC0" }),
        primaryEnd: t.String({ default: "#3949AB" }),
        summaryPanelBackground: t.String({ default: "#FFFFFF" }),
        summaryPanelBorder: t.String({ default: "#E8EAF6" }),
        summaryTitleColor: t.String({ default: "#1A237E" }),
        summaryMarkdownText: t.String({ default: "#2C3E50" }),
        summaryMarkdownAccent: t.String({ default: "#7986CB" })
    }),
    explain: t.Object({
        panelBackground: t.String({ default: "#FFFFFF" }),
        borderColor: t.String({ default: "#3949AB" }),
        headerStart: t.String({ default: "#303F9F" }),
        headerEnd: t.String({ default: "#1A237E" }),
        headerText: t.String({ default: "#C5CAE9" }),
        bodyText: t.String({ default: "#283593" }),
        accentColor: t.String({ default: "#FF4081" })
    }),
    chat: t.Object({
        panelBackground: t.String({ default: "#0D1117" }),
        borderColor: t.String({ default: "#303F9F" }),
        textColor: t.String({ default: "#E6EDF3" }),
        headerStart: t.String({ default: "#1A237E" }),
        headerEnd: t.String({ default: "#0D1117" }),
        headerText: t.String({ default: "#FF4081" }),
        messageAssistantBackground: t.String({ default: "#161B22" }),
        messageUserStart: t.String({ default: "#3F51B5" }),
        messageUserEnd: t.String({ default: "#283593" }),
        inputBackground: t.String({ default: "#21262D" }),
        chatInputText: t.String({ default: "#F0F6FC" }),
        assistantMdHeading: t.String({ default: "#FF4081" }),
        assistantMdH1Underline: t.String({ default: "#303F9F" }),
        assistantMdParagraph: t.String({ default: "#C9D1D9" }),
        assistantMdStrong: t.String({ default: "#FFFFFF" }),
        assistantMdCodeBg: t.String({ default: "#0D1117" }),
        assistantMdCodeText: t.String({ default: "#7986CB" }),
        assistantMdCodeBorder: t.String({ default: "#303F9F" }),
        assistantMdPreBg: t.String({ default: "#010409" }),
        assistantMdPreText: t.String({ default: "#8B949E" }),
        assistantMdPreBorder: t.String({ default: "#303F9F" }),
        assistantMdLink: t.String({ default: "#58A6FF" }),
        assistantMdTableBorder: t.String({ default: "#303F9F" }),
        assistantMdThBg: t.String({ default: "#161B22" }),
        assistantMdThText: t.String({ default: "#FF4081" }),
        assistantMdEvenRowBg: t.String({ default: "#0D1117" }),
        sendButtonStart: t.String({ default: "#FF4081" }),
        sendButtonEnd: t.String({ default: "#C2185B" })
    }),
    sourceFile: t.String({ default: "cosmic_blueberry.json" })
})

export type TUploadFileRequest = Static<typeof UploadFileRequest>
export type TThemeStructureRequest = Static<typeof ThemeStructureRequest>