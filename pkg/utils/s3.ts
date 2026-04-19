import { createClient, SupabaseClient } from '@supabase/supabase-js'
import ENV from '../env/env';

class S3Util {
    private supabase: SupabaseClient
    constructor() {
        this.supabase = createClient(ENV.PROJECT_URL!, ENV.API_KEY!)
    }

    async uploadFile(file: File, fileName: string, bucketName: string, overwrite: boolean = false) {
        const { data, error } = await this.supabase.storage.from(bucketName).upload(fileName, file, {
            upsert: overwrite
        })
        if (error) {
            console.error(error)
            throw new Error(error.message)
        } else {
            console.log(data)
            return data
        }
    }
}

export default new S3Util()