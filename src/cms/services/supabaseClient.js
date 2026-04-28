import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://utairofsnsgpbrkzollp.supabase.co'
const supabaseKey = 'sb_publishable_15vbsvgz45fGr4LRngKVYA_eyf8g9QU'
export const supabase = createClient(supabaseUrl, supabaseKey)
