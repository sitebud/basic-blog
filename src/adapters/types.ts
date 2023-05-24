import { ArticlePageContent } from './ArticlePageContent';
import { AuthorProfilePageContent } from './AuthorProfilePageContent';
import { CategoriesPageContent } from './CategoriesPageContent';
import { CategoryPageContent } from './CategoryPageContent';
import { MainPageContent } from './MainPageContent';
import { SearchPageContent } from './SearchPageContent';
import { SiteContent } from './SiteContent';
import { TagPageContent } from './TagPageContent';
import { TagsPageContent } from './TagsPageContent';
export * from './ArticlePageContent';
export * from './AuthorProfilePageContent';
export * from './CategoriesPageContent';
export * from './CategoryPageContent';
export * from './MainPageContent';
export * from './SearchPageContent';
export * from './SiteContent';
export * from './TagPageContent';
export * from './TagsPageContent';
export type DataFieldType = 'string' | 'number';
export type DocumentContentContext = {
    articlePageContent?: ArticlePageContent;
    authorProfilePageContent?: AuthorProfilePageContent;
    categoriesPageContent?: CategoriesPageContent;
    categoryPageContent?: CategoryPageContent;
    mainPageContent?: MainPageContent;
    searchPageContent?: SearchPageContent;
    siteContent?: SiteContent;
    tagPageContent?: TagPageContent;
    tagsPageContent?: TagsPageContent;
};
export type DocumentsListField = {
    entriesByParent?: Array<{
        portion: Array<DocumentContentContext>;
        portionOrigin: any;
    }>;
    entries?: Array<DocumentContentContext>;
};
export type ImageField = {
    src: string;
    alt: string;
    focusX?: number;
    focusY?: number;
};
export type LinkField = { href: string; target: string };
