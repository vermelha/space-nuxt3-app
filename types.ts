type eventsType = {
    id: string
    provider: string
}

type launchesType = {
    id: string
    provider: string
}

export interface ArticleItem {
    id: string
    featured: boolean
    title: string
    url: string
    imageUrl: string
    newsSite: string
    summary: string
    publishedAt: string
    updatedAt: string
    launches: [launchesType]
    events: [eventsType]
}
