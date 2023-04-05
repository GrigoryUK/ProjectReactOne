// string - address page, number - position scroll
export type ScrollSchema = Record<string, number>;

export interface scrollSaveSchema {
    scroll: ScrollSchema;
}
