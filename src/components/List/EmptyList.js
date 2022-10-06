import emptySvg from '../../img/empty.svg';

import './EmptyList.css';

function EmptyList() {
    return (
        <div className="empty-list">
            <img src={emptySvg} />
        </div>
    );
}

export default EmptyList;