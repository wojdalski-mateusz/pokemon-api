import { Input } from "@mui/material";
import * as S from "./styles";

export const SearchBar = ({ handleSearchChange }) => {
  return (
    <S.SearchContainer>
      <S.InputWrapper>
        <Input
          onChange={handleSearchChange}
          placeholder={"Search"}
          disableUnderline={true}
        />
      </S.InputWrapper>
    </S.SearchContainer>
  );
};
