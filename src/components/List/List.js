import EmptyList from './EmptyList';

function List(props) {
    const items = props.items;

    let display = (items.length > 0)
        ? items
        : <EmptyList />
    ;

    return (
        <div>
            {display}
        </div>
    );
}

export default List;