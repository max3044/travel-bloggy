import {createClient} from "next-sanity"

import {config} from "./config"

export const sanityClient = createClient(config)


// добавляем доп настройки только в previewClient
export const previewClient = createClient({
    ...config, 
    /**
     * Set useCdn to `false` if your application require the freshest possible
     * data always (potentially slightly slower and a bit more expensive).
     * Authenticated request (like preview) will always bypass the CDN
     **/
    useCdn: process.env.NODE_ENV === 'production',
    
    /**
     * OPTIONAL config to enable authentication with custom token
     * You might need this if you host the preview on a different url than Sanity Studio
     */
    token: process.env.SANITY_API_TOKEN,
})

// в зависимости от авторизации
export const getClient = (usePreview) => usePreview ? previewClient : sanityClient