import React, {useEffect, useState} from 'react';
import './CatalogPageStyle.scss'
import CatalogSearch from "../../components/CatalogPage/CatalogSearch/CatalogSearch";
import CatalogFilter from "../../components/CatalogPage/CatalogFilter/CatalogFilter";
import CatalogContent from "../../components/CatalogPage/CatalogContent/CatalogContent";
import {API_KEY} from "../../utils/consts";
import {useParams} from "react-router-dom";
import CatalogPagination from "../../components/CatalogPage/CatalogContent/CatalogPagination";

const CatalogPage = () => {

    const [ordering, setOrdering] = useState('-rating');

    const [games, setGames] = useState<{results: Array<{ name: string,
            background_image: string,
            id: number,
            released: string,
            rating: number,
            platforms: Array<{platform: {name: string, id: number}}>
            genres: Array<{id: number, name: string}> }>, count: number}>({results: [], count: 0});
    const {page} = useParams()

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=30&ordering=${ordering}&page=${page}`)
            .then(response => response.json())
            .then(data => {
                setGames(data)
            })
            .catch(error => {
                console.error(error);
            });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [page, ordering])


    // @ts-ignore
    return (
        <section className='section main'>
            <div className='container catalog__wrapper'>
                <h1>Games catalog</h1>
                {/*<CatalogSearch/>*/}
            </div>
            <div className='container catalog__content'>
                <CatalogFilter setOrdering={setOrdering}/>
                <CatalogContent gamesList={games.results}/>
            </div>
            <div className='container catalog__content'>
                <CatalogPagination pageSize={20} currentPage={page} count={games.count}/>
            </div>
        </section>
    );
};

export default CatalogPage;
