/** @format */

import React from "react";

function SiteHeader() {
  return (
    <div className="h-20 ">
      <div className="flex justify-between py-4 border-b-2 border-stone-400">
        <div className="flex ml-4 text-lg font-bold">CRUD APP</div>
        <div>
          <ul className="flex mr-3  gap-3 ">
            {/* <li>Manu1</li>
            <li>Manu2</li>
            <li>Manu3</li> */}
            <li>User</li>
            <li>Avater</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SiteHeader;
