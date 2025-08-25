import { Box, Button, HStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

const Pagination = ({ count, currentPage, setCurrentPage, pageSize, setPageSize }) => {
  const pageCount = Math.ceil(count / pageSize);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const [rowsPerPage, setRowsPerPage] = useState(pageSize);

  useEffect(() => {
    setPageSize(rowsPerPage);
    if (currentPage > pageCount) setCurrentPage(pageCount);
  }, [rowsPerPage, pageCount]);

  const nextPage = () => {
    if (currentPage < pageCount) setCurrentPage((prev) => prev + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  if (pageCount <= 1) return null;

  return (
    <div className="md:flex bg-white items-center justify-between px-4 py-4">
      {/* Rows per page */}
      <Box pl={2} className="flex items-center space-x-2">
        <select
          value={rowsPerPage}
          onChange={(e) => setRowsPerPage(Number(e.target.value))}
          className="border bg-[#DEDEDE] border-gray-300 rounded md:px-2 md:py-1 text-gray-700"
        >
          {[4, 5, 10, 20, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        <p className="text-[#333333] text-[13px] opacity-[0.7] font-[500] font-poppins leading-[24px]">
          per page 
        </p>
      </Box>

      {/* Page selector + Buttons */}
      <div className="flex items-center md:mt-0 mt-2 space-x-4">
        <div className="flex items-center space-x-2">
          <select
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
            className="border border-gray-300 rounded md:px-2 md:py-1 text-gray-700"
          >
            {pages.map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
          <p className="text-[#333333] text-sm opacity-[0.7] font-[500] font-poppins leading-[24px]">
            of {pageCount} pages
          </p>
        </div>

        <HStack gap={0} >
          <Button
          cursor={'pointer'}
          px={0}
          bg={'transparent'}
          color={'#333333CC'}
            className="md:p-2 font-semibold text-sm flex items-center text-gray-700 rounded transition-all duration-200 ease-in-out disabled:opacity-50 hover:bg-gray-200"
            onClick={previousPage}
            disabled={currentPage === 1}
          >
            <MdKeyboardArrowLeft className="transition-transform duration-200" />
          </Button>
          <Button
          px={0}
          cursor={'pointer'}
          bg={'transparent'}
          color={'#333333CC'}
            className="p-2 flex items-center font-semibold text-sm text-gray-700 rounded transition-all duration-200 ease-in-out disabled:opacity-50 hover:bg-gray-200"
            onClick={nextPage}
            disabled={currentPage === pageCount}
          >
            <RiArrowRightSLine className="transition-transform duration-200" />
          </Button>
        </HStack>
      </div>
    </div>
  );
};

export default Pagination;
