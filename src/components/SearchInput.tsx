//@ts-nocheck
import useGameQueryStore from "@/store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
        }
        navigate("/");
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input ref={ref} borderRadius={20} placeholder="Search Games..." />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
