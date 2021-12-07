import { useState } from "react";
import { TopBar, HeaderTitle, HeaderMenu, SearchInput } from "./Header.styled";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../../utils/modules/Icon";
import searchIcon from "../../utils/assets/search-icon.json";
import carIcon from "../../utils/assets/shopping-car.json";

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const history = useNavigate();

  const goToSearch = () => {
    history(`/search/${searchValue}`);
  };

  return (
    <div className="Header">
      <TopBar>
        <span>The Best Ecommerce Store</span>
      </TopBar>
      <HeaderTitle>
        <Link to="/">Muebles Troncoso</Link>
      </HeaderTitle>
      <HeaderMenu>
        <div className="searchSection">
          <form onSubmit={goToSearch}>
            <SearchInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search ...."
            />
            <span onClick={goToSearch}>
              <Icon
                src={searchIcon.d}
                name={"search-icon"}
                width="32px"
                height="32px"
                fill="#fff"
                viewbox={"0 0 24 24"}
              />
            </span>
          </form>
        </div>

        <div className="items">
          <Icon
            src={carIcon.d}
            viewbox={"0 0 512 512"}
            fill="#a68a64"
            width="40px"
            height="40px"
          />
        </div>
      </HeaderMenu>
    </div>
  );
};
