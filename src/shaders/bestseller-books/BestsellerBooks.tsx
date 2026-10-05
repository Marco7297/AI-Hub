import {BookAssetHost,type BookAssetProps} from '../book-asset-host/BookAssetHost';
export type BestsellerBooksProps=BookAssetProps;
/** Standalone editions extracted from bestsellers-book-showcase. */
export function BestsellerBooks(props:BestsellerBooksProps){return <BookAssetHost {...props} kind="bestsellers" title="Bestseller Books"/>;}
