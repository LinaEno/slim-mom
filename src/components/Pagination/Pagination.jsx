import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { selectEatenProducts, selectPerPage } from 'redux/diary/selectors';
import { setPage } from 'redux/diary/slice';
import css from './Pagination.module.css';

export const Pagination = () => {
  const eatenProducts = useSelector(selectEatenProducts);

  const itemsPerPage = useSelector(selectPerPage);
  const dispatch = useDispatch();

  const pageCount = Math.ceil(eatenProducts.length / itemsPerPage);

  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const handlePageClick = e => {
    const newPage = (e.selected * itemsPerPage) % eatenProducts.length;
    dispatch(setPage(newPage));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isTablet ? (
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          nextLabel=">"
          previousLabel="<"
          breakLabel="..."
          onPageChange={handlePageClick}
          renderOnZeroPageCount={null}
          containerClassName={css.pagination}
          pageLinkClassName={css.pageLink}
          nextLinkClassName={css.pageLink}
          previousLinkClassName={css.pageLink}
          breakLinkClassName={css.pageLink}
          activeClassName={css.active}
          disabledClassName={css.disabled}
        />
      ) : (
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={0}
          marginPagesDisplayed={1}
          nextLabel=">"
          previousLabel="<"
          breakLabel={null}
          onPageChange={handlePageClick}
          renderOnZeroPageCount={null}
          containerClassName={css.pagination}
          pageLinkClassName={css.pageLink}
          nextLinkClassName={css.pageLink}
          previousLinkClassName={css.pageLink}
          activeClassName={css.active}
          disabledClassName={css.disabled}
        />
      )}
    </>
  );
};
