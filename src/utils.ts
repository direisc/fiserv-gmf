export const cleanUpInterface = (obj: any) => JSON.parse(JSON.stringify(obj))

export const mountResponse = (BODY_MESSAGE: string) =>
  `<?xml version="1.0" encoding="UTF-8"?><GMF xmlns="com/fiserv/Merchant/gmfV12.04">${BODY_MESSAGE}</GMF>`
