import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const List = ["Explore", "Stats", "Resources", "Create"];
  return (
    <div>
      <div>
        <span>
          <div className="logo">
            <img
              width={50}
              src="https://static.opensea.io/Logos/opensea-pride.svg"
            />
            <span>Opensea</span>
          </div>

          <div class="User">
            <ul className="menu">
              {List.map((menu) => (
                <li>{menu}</li>
              ))}
            </ul>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </span>
      </div>
      <div>
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" />
      </div>
    </div>
  );
};

export default Navbar;
