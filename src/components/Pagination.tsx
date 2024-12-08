import React from 'react';
import OpeningAngleBracket from '../assets/OpeningAngleBracket';
import ClosingAngleBracket from '../assets/ClosingAngleBracket';

interface PaginationProps {
  curPage: number;
  setCurPage: (targetPage: number) => void;
  endPage: number;
  pageArr: number[];
}

const Pagination = (paginationProps: PaginationProps) => {
  const movePage = (targetPage: number) => {
    // 페이지가 1 혹은 마지막 페이지를 못 벗어나도록 조정
    targetPage = Math.max(1, targetPage);
    targetPage = Math.min(paginationProps.endPage, targetPage);

    paginationProps.setCurPage(targetPage);
  };

  return (
    <div className="flex justify-center my-2">
      <div className="flex items-center m-2">
        <OpeningAngleBracket
          size={'1rem'}
          className={`${
            paginationProps.pageArr[0] === 1
              ? 'fill-gray-300'
              : 'fill-gray-500 cursor-pointer'
          }`}
          onClick={() => movePage(paginationProps.pageArr[0] - 1)}
        />
      </div>
      {paginationProps.pageArr.map((value) => (
        <button
          className={`text-lg px-2 my-2 mx-10 ${
            value === paginationProps.curPage
              ? 'text-gray-900'
              : 'text-gray-400'
          }`}
          key={value}
          onClick={() => movePage(value)}
        >
          {value}
        </button>
      ))}
      <div className="flex items-center m-2">
        <ClosingAngleBracket
          size={'1rem'}
          className={`${
            paginationProps.pageArr[paginationProps.pageArr.length - 1] ===
            paginationProps.endPage
              ? 'fill-gray-300'
              : 'fill-gray-500 cursor-pointer'
          }`}
          onClick={() => movePage(paginationProps.endPage + 1)}
        />
      </div>
    </div>
  );
};

export default Pagination;
