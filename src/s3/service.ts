import S3Util from "../../pkg/utils/s3"
import ENV from "../../pkg/env/env"
import { PresetsThemeResponse } from "./model/res"
import { ThemeStructureRequest, TThemeStructureRequest } from "./model/req"
import { Value } from '@sinclair/typebox/value'
import fs from 'fs'
import path from 'path'
class S3Service {
    constructor() { }

    async uploadTheme(file: File, fileName: string) {
        try {
            await this.validateThemeStructure(file)
            const response = await S3Util.uploadFile(file, fileName, ENV.THEME_BUCKET_NAME, true)
            await this.updatePresets(response.path)
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }

    async uploadJSONTheme(theme: TThemeStructureRequest){
        try {
            const response = await S3Util.uploadFile(new File([JSON.stringify(theme)], theme.sourceFile, { type: "application/json" }), theme.sourceFile, ENV.THEME_BUCKET_NAME, true)
            await this.updatePresets(response.path)
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }

    async validateThemeStructure(file: File) {
        const content = await file.json()
        const isValid = Value.Check(ThemeStructureRequest, content)

        if (!isValid) {
            throw new Error("Invalid theme structure")
        }

        return true
    }

    async updatePresets(fileName: string) {
        const presetsThemeUrl = ENV.PRESETS_THEME_URL
        const presetsTheme = await fetch(presetsThemeUrl)
        const presets = await presetsTheme.json() as PresetsThemeResponse
        if (presets.files.includes(fileName)) {
            return true
        }
        presets.files.push(fileName)

        //save file to public folder
        const publicFolder = path.join(__dirname, "../../public")
        const filePath = path.join(publicFolder, "presets.json")
        await fs.writeFileSync(filePath, JSON.stringify(presets))


        //upload presets to s3
        const response = await S3Util.uploadFile(new File([await fs.readFileSync(filePath)], filePath, { type: "application/json" }), "presets.json", ENV.THEME_BUCKET_NAME, true)
        return true
    }
}

export default new S3Service()