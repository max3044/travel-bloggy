import { createPreviewSubscriptionHook, 
    createCurrentUserHook } from "next-sanity";

import createImageUrlBuilder from "@sanity/image-url"

import {config} from "./config"


// возвращает нам изображение
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const useCurrentUser = createCurrentUserHook(config)

