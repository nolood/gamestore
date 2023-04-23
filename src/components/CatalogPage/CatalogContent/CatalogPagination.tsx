import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {CATALOG_ROUTE} from "../../../utils/consts";

interface CatalogPaginationProps {
    count: number,
    currentPage: string | undefined,
    pageSize: number
}

const CatalogPagination: FC<CatalogPaginationProps> = ({pageSize, count, currentPage}) => {

    const navigate = useNavigate()

    const totalPages = Math.ceil(count / pageSize);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const startIndex = Math.max(Number(currentPage) - 2, 0);
    const endIndex = Math.min(startIndex + 4, totalPages - 1);
    const visiblePages = pages.slice(startIndex, endIndex + 1);

    return (
        <div className='pag-page-list'>
            {visiblePages.map((page) =>
                <div
                    onClick={() => navigate(CATALOG_ROUTE + '/' + page)}
                    key={page}
                    className={Number(currentPage) === page ? 'pag-page active' : 'pag-page'}
                >
                    {page}
                </div>
            )}
        </div>
    );
};

export default CatalogPagination;
