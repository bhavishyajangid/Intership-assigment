import React, { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCategoryApi,
  setStartLoading,
  setStopLoading,
} from "../../store/Products";
import { setFilterProduct, setLoadeMore } from "../../store/Filter";

const Filter = () => {
  const [Category, setCategory] = useState([]);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const previouValue = useRef("filter");
  const { filterCategory } = useSelector((state) => state.filterProducts);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          `https://world.openfoodfacts.org/categories.json`
        );
        const res = await response.json();
        if (res) {
          setCategory(res.tags);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
  }, []);

  useEffect(() => {
    const handleFilterCategory = async () => {
      console.log(previouValue, value, "starting");

      if (previouValue.current !== value) {
        dispatch(setLoadeMore(false));
        dispatch(setStartLoading({ loader: true }));
        console.log('diffrent value');
        
      } else {
        console.log("same value");
        dispatch(setStartLoading({ loadMoreProducts: true }));
        dispatch(setLoadeMore(true));
      }

      try {
        console.log(filterCategory.page ,'page value starting' );
        
        if (value !== "filter") {
          const response = await fetch(
            `https://world.openfoodfacts.org/category/${value}.json?page=${filterCategory.page}`
          );
          const res = await response.json();
          if (res) {
            dispatch(changeCategoryApi(true));
            dispatch(setFilterProduct(res.products));
          }
        } else {
          dispatch(changeCategoryApi(false));
        }
      } catch (error) {
        throw error;
      } finally {
        previouValue.current = value;
        dispatch(setStopLoading());
      }
    };

    handleFilterCategory();
  }, [value, filterCategory.page]);

  return (
    <div>
      <select
        className="w-32 px-2 py-1 border border-solid border-gray-500 outline-none font-medium bg-black text-white rounded-lg mt-3 cursor-pointer"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <option className="" selected value="filter">
          Filter{" "}
        </option>
        {Category?.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Filter);
