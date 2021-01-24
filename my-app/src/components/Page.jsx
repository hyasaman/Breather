import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { isEmpty } from "lodash";
import Loader from "react-loader-spinner";
import { fetchResults } from "../store/action.creators";
import {
  StyledTextbox,
  Banner,
  StyledSelect,
  CardsWrapper,
  LoaderWrapper,
  PaginationWrapper,
  FilterWrapper,
  StyledButton
} from "./Styled";
import { InfoRow } from "./InfoRow";

export const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tag, setTag] = useState("");
  const dispatch = useDispatch();
  const busy = useSelector(state => state.busy);
  const searchResults = useSelector(state => state.searchResult);
  const handleSearch = target => {
    setSearchTerm(target.value);
    dispatch(fetchResults({ query: target.value }));
  };
  useEffect(() => {
    dispatch(fetchResults({ query: "" }));
  }, [dispatch]);

  const handleDropdownChange = value => {
    setTag(value.value);
    dispatch(fetchResults({ tags: value.value, query: searchTerm }));
  };
  const filterOptionList = [
    { value: "story", label: "Story" },
    { value: "comment", label: "Comment" },
    { value: "", label: "No filter" }
  ];

  const handlePageChange = (currentPage, navigation) => {
    navigation === "NEXT"
      ? dispatch(
          fetchResults({ tags: tag, query: searchTerm, page: currentPage + 1 })
        )
      : dispatch(
          fetchResults({ tags: tag, query: searchTerm, page: currentPage - 1 })
        );
  };

  return (
    <>
      <Banner>
        <p>Hacker News</p>
        <StyledTextbox>
          <input
            type="text"
            placeholder={"Search stories by title, url or author"}
            value={searchTerm}
            onChange={({ target }) => {
              handleSearch(target);
            }}
          />
        </StyledTextbox>
      </Banner>
      {!isEmpty(searchResults) && (
        <>
          <FilterWrapper>
            <StyledSelect>
              <label>Filter by</label>
              <Select
                onChange={value => {
                  handleDropdownChange(value);
                }}
                value={filterOptionList.filter(x => x.value === tag)}
                options={filterOptionList}
              />
            </StyledSelect>
            <PaginationWrapper>
              {searchResults.page > 0 && (
                <StyledButton
                  onClick={() =>
                    handlePageChange(searchResults.page, "PREVIOUS")
                  }
                >
                  {"< Previous page"}
                </StyledButton>
              )}
              <p> {searchResults.page + 1}</p>
              {searchResults.page < searchResults.nbPages && (
                <StyledButton
                  onClick={() => handlePageChange(searchResults.page, "NEXT")}
                >
                  {"Next page >"}
                </StyledButton>
              )}
            </PaginationWrapper>
          </FilterWrapper>
          {busy && (
            <LoaderWrapper>
              {" "}
              <Loader
                type="Grid"
                color="#4f7a5af5"
                height={90}
                width={90}
                visible
              />{" "}
            </LoaderWrapper>
          )}
          {!isEmpty(searchResults.hits) && (
            <CardsWrapper>
              {searchResults.hits.map(result => (
                <InfoRow key={result.objectID} item={result} />
              ))}
            </CardsWrapper>
          )}
        </>
      )}
    </>
  );
};
