import React from 'react';
import {CategoriesPage_PageBody_CategoriesGalleryBlock} from '@/adapters';
import {CategoryCardLayout} from '@/components/CategoryPage/CategoryCardLayout';

interface CategoriesFullCategoryGalleryBlockProps {
    content: CategoriesPage_PageBody_CategoriesGalleryBlock;
}

export function CategoriesCategoriesGalleryBlock(props: CategoriesFullCategoryGalleryBlockProps) {
    const {content} = props;
    const {galleryListing: {documentsList}} = content;
    return (
        <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
            {documentsList.entries?.map((documentContentItem, idx) => {
                if (documentContentItem.categoryPageContent) {
                    return (
                        <CategoryCardLayout key={`categoryPageContent_${idx}`} content={documentContentItem.categoryPageContent} />
                    );
                }
            })}
        </div>
    );
}