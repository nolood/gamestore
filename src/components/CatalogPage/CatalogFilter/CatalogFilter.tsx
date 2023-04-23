import React, {FC} from 'react';

interface CatalogFilterProps {
    setOrdering: (string:string) => void
}

const CatalogFilter: FC<CatalogFilterProps> = ({setOrdering}) => {

    return (
        <div className='catalog__filter'>
            <div className='filter__filter'>
                <h3>Sort by</h3>
                <ul className='filter__sortby'>
                    <li onClick={() => setOrdering('-rating')}>Rating</li>
                    <li onClick={() => setOrdering('-released')}>Release Date</li>
                    <li onClick={() => setOrdering('-name')}>Names</li>
                    <li onClick={() => setOrdering('rating')}>Rating (reverse)</li>
                    <li onClick={() => setOrdering('released')}>Release Date (reverse)</li>
                    <li onClick={() => setOrdering('name')}>Names (reverse)</li>
                </ul>
            </div>
        </div>
    );
};

export default CatalogFilter;
