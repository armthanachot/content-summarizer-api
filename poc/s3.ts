import { createClient } from '@supabase/supabase-js'
import fs from 'fs'

const ProjectUrl = process.env.PROJECT_URL!;
const ApiKey = process.env.API_KEY!;
const PresetsThemeUrl = process.env.PRESETS_THEME_URL;
const BucketName = process.env.THEME_BUCKET_NAME!;

const filePath='/Users/thanachottesjaroen/Desktop/side_projects/chrome-extension/content-summarizer-api/poc/electric_eucalyptus_2.json'
const fileName = 'electric_eucalyptus_2.json'

const supabase = createClient(ProjectUrl, ApiKey);


async function uploadFile(file: File) {
    const { data, error } = await supabase.storage.from(BucketName).upload(fileName, file)
    if (error) {
        console.error(error);
    } else {
      // Handle success
      console.log(data);
      
    }
  }


  uploadFile(new File([fs.readFileSync(filePath)], filePath, { type: 'application/json' }))