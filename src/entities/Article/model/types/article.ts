import { User } from 'entities/User'
import { ArticleBlockType, ArticleType } from '../consts/consts'


export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType
}
export interface ArticleBlockCode extends ArticleBlockBase {
    type: ArticleBlockType.CODE
    code: string
}
export interface ArticleBlockImage extends ArticleBlockBase{
    type: ArticleBlockType.IMAGE
    src: string
    title: string
}
export interface ArticleBlockText extends ArticleBlockBase{
    type: ArticleBlockType.TEXT
    title?: string
    paragraphs: string[]
}

export type ArticleBlock = ArticleBlockCode | ArticleBlockImage | ArticleBlockText

export interface Article {
    id: string
    title: string
    user: User
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleType[]
    blocks: ArticleBlock[]
}
