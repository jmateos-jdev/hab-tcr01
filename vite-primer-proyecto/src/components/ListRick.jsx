import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function ListRick({name = 'rick'}) {

    const [list, setList] = useState([]);

    const fetchData = async (nameFilter) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nameFilter}`);
        const data = await response.json();
        if(data.results?.length > 0){
            setList(data.results);
        }else{
            setList([]);
        }
    }

    useEffect(() => {
        if(name.length > 0){
            fetchData(name);
        }else{
            setList([]);
        }
    }, [name]);


    return <ul>{list.map((item) => <li key={item.id}>{item.name}</li>)}</ul>;
}

ListRick.propTypes = {
    name: PropTypes.string.isRequired
}

