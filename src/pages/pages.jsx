import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Pagination from "../components/Pagination";
import PostGrid from "../components/PostGrid";

const Pages = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [sortBy, setSortBy] = useState("-published_at");
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const page = Number.parseInt(searchParams.get("page") || "1");
    const size = Number.parseInt(searchParams.get("size") || "10");
    const sort = searchParams.get("sort") || "-published_at";

    setCurrentPage(page);
    setPerPage(size);
    setSortBy(sort);
  }, [searchParams]);

  const fetchPosts = async (page, size, sort) => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://suitmedia-backend.suitdev.com/api/ideas",
        {
          params: {
            "page[number]": page,
            "page[size]": size,
            append: ["small_image", "medium_image"],
            sort: sort,
          },
        }
      );

      const data = await response.data;

      //debug
      console.log(data);
      console.log(data.meta.last_page);
      console.log(data.meta.total);

      setPosts(data.data);
      setTotalPages(data.meta.last_page);
      setTotalItems(data.meta.total);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateUrl = (page, size, sort) => {
    const newSearch = `?page=${page}&size=${size}&sort=${sort}`;
    if (window.location.search !== newSearch) {
      navigate(
        {
          pathname: window.location.pathname,
          search: newSearch,
        },
        { replace: true }
      );
    }
  };

  const handlePerPageChange = (size) => {
    setPerPage(size);
    setCurrentPage(1);
    updateUrl(1, size, sortBy);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    updateUrl(page, perPage, sortBy);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    setCurrentPage(1);
    updateUrl(1, perPage, sort);
  };

  useEffect(() => {
    fetchPosts(currentPage, perPage, sortBy);
  }, [currentPage, perPage, sortBy]);

  const startItem = (currentPage - 1) * perPage + 1;
  const endItem = Math.min(currentPage * perPage, totalItems);

  return (
    <div>
      <Header />
      <Banner />

      <div className="w-[85%] flex m-auto justify-between p-5">
        <p className="">
          Showing {startItem} - {endItem} of {totalItems}
        </p>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            <p>Show per page:</p>
            <select
              className="border p-1 px-5 rounded-2xl"
              value={perPage}
              onChange={(e) =>
                handlePerPageChange(Number.parseInt(e.target.value))
              }
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="flex items-center gap-5">
            <p>Sort By: </p>
            <select
              className="border p-1 px-5 rounded-2xl"
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="-published_at">Newest</option>
              <option value="published_at">Oldest</option>
            </select>
          </div>
        </div>
      </div>

      <PostGrid posts={posts} loading={loading} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Pages;
