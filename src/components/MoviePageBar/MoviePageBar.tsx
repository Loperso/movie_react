import React from 'react';

interface Props {
    page: number;
    maxPages: number | null;
    clicked: (newPage: number) => void
}

const MoviePageBar = (props: Props) => {

    let pagesLinks = null

    if (props.maxPages) {
        if (props.page === 1) {
            pagesLinks = (
                <>
                    <div onClick={() => props.clicked(props.page)}>{props.page}</div>
                    <div onClick={() => props.clicked(props.page + 1)}>{props.page + 1}</div>
                    <div onClick={() => props.clicked(props.page + 2)}>{props.page + 2}</div>
                </>
            );
        }else if( props.page === 2) {
            pagesLinks = (
                <>
                    <div onClick={() => props.clicked(props.page - 1)}>{props.page - 1}</div>
                    <div onClick={() => props.clicked(props.page)}>{props.page}</div>
                    <div onClick={() => props.clicked(props.page + 1)}>{props.page + 1}</div>
                    <div onClick={() => props.clicked(props.page + 2)}>{props.page + 2}</div>
                </>
            );
        }else if(props.page === props.maxPages) {
            pagesLinks = (
                <>
                    <div onClick={() => props.clicked(props.page - 2)}>{props.page - 2}</div>
                    <div onClick={() => props.clicked(props.page - 1)}>{props.page - 1}</div>
                    <div onClick={() => props.clicked(props.page)}>{props.page}</div>
                </>
            ); 
        }else if(props.page === props.maxPages - 1) {
            pagesLinks = (
                <>
                    <div onClick={() => props.clicked(props.page - 2)}>{props.page - 2}</div>
                    <div onClick={() => props.clicked(props.page - 1)}>{props.page - 1}</div>
                    <div onClick={() => props.clicked(props.page)}>{props.page}</div>
                    <div onClick={() => props.clicked(props.page + 1)}>{props.page + 1}</div>
                </>
            ); 
        }else {
            pagesLinks = (
                <>
                    <div onClick={() => props.clicked(props.page - 2)}>{props.page - 2}</div>
                    <div onClick={() => props.clicked(props.page - 1)}>{props.page - 1}</div>
                    <div onClick={() => props.clicked(props.page)}>{props.page}</div>
                    <div onClick={() => props.clicked(props.page + 1)}>{props.page + 1}</div>
                    <div onClick={() => props.clicked(props.page + 2)}>{props.page + 2}</div>
                </>
            );
        }
        
    }

    return (
        <div>
            {pagesLinks}
        </div>
    );
}

export default MoviePageBar;