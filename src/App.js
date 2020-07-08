import React, { useCallback, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

const MAX_ITEMS = 80;

const createItems = () => new Array(20).fill(0);

const App = () => {
    const [items, setItems] = useState(createItems());

    const loadMore = useCallback(page => {
        console.log(page);
        setTimeout(() => setItems(items => [...items, ...createItems()]), 1500);
    }, []);

    const mappedItems = items.map((_, i) => <div className="item" key={i}>#{i + 1}</div>);

    return (
        <div className="container">
            <InfiniteScroll
                pageStart={0}
                loadMore={loadMore}
                hasMore={items.length < MAX_ITEMS}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                {mappedItems}
            </InfiniteScroll>
        </div>
    );
};

export default App;