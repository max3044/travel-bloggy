export const config = {

    /**
     * Find your project ID and dataset in `sanity.json` in your studio project.
     * These are considered “public”, but you can use environment variables
     * if you want differ between local dev and production.
     *
     * https://nextjs.org/docs/basic-features/environment-variables
     **/
        dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET || 'production',
        projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID,
        apiVersion: '2021-10-21', // Learn more: https://www.sanity.io/docs/api-versioning
     
}