const conf = {
    appwriteUrl:String(import.meta.env.VITE_APPWIRTE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWIRTE_PROJECT_ID),
    appwritedDatabaseId:String(import.meta.env.VITE_APPWIRTE_DATABASE_ID),
    appwritedCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWIRTE_BUCKET_ID)
}

export default conf