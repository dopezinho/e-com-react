import "./index.scss"
import searchLogo from "../../assets/search-solid-black.png"
import profileLogo from "../../assets/user-account-profile-black.png"
import favoriteLogo from "../../assets/favorite-black.png"

const Search = () => {
  return (
    <div className="search">
      <div className="search__input-container">
        <img src={searchLogo} alt="search logo" className="search__search-logo" />
        <input type="text" placeholder="Search" />
      </div>
      <img src={profileLogo} alt="profile logo" />
      <img src={favoriteLogo} alt="favorite logo" />
    </div>
  );
};

export default Search