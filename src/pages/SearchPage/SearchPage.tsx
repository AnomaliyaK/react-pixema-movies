import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loader } from "components";
import { fetchAllSearch, useAppDispatch, useAppSelector } from "store";

export const SearchPage = () => {
  const { isLoading, results, error } = useAppSelector((state) => state.search);
  const { register } = useForm();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // peru мы берем из хука useForm
    dispatch(fetchAllSearch({ searchValue: "peru" }));
  }, [dispatch]);

  return (
    <div>
      <form>
        <input type="text" {...register("searchValue")} />
      </form>

      {isLoading && <Loader />}
      {/* span ниже сделать компонентом <ErrorMessage message={error}/>*/}
      {error && <span>{error}</span>}
      {results && results.length > 0 && (
        <ul>
          {results.map((movie) => {
            return <li>{movie.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};
