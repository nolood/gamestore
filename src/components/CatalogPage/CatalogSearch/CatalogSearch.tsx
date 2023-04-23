import React, {useState} from 'react';

const CatalogSearch = () => {

    const [searchValue, setSearchValue] = useState('');

    return (
        <form className='catalog__search'>
            <input
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                type='text'
                placeholder='Search game...'
            />
        </form>
    );
};

export default CatalogSearch;
