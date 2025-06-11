import React from 'react';
import { Link } from 'react-router-dom';
import Item, { type NewsItem } from './Item';

interface Props {
  items: NewsItem[];
  visible: number;
  onLoadMore: () => void;
}

const List: React.FC<Props> = ({ items, visible, onLoadMore }) => {
  const shown = items.slice(0, visible);

  return (
    <div className="timeline-container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="timeline-wrapper position-relative">

            {shown.map((item, idx) => (
              <Item key={item.id} item={item} index={idx} />
            ))}

            {visible >= items.length && (
              <div className="text-center mt-5">
                <div className="alert alert-light border">
                  <i className="bi bi-check-circle text-success me-2" />
                  All news items have been loaded
                </div>
                <Link to="/all-news" className="btn btn-outline-primary">
                  <i className="bi bi-grid me-2" />
                  View in Grid Format
                </Link>
              </div>
            )}

            {visible < items.length && (
              <div className="text-center mt-4">
                <button className="btn btn-primary" onClick={onLoadMore}>
                  Load More
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default List;