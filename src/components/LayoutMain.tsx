import { ReactNode } from "react";
import { Pagination } from "./Pagination";

type LayoutMainType = {
  children: ReactNode;
  shopData: any;
  // setSearchNum: any;
  // setShopData: any;
  currentPage: number;
};

export const LayoutMain = ({
  children,
  shopData,
  currentPage,
}: // setSearchNum,
// setShopData,
// pageNum,
LayoutMainType) => {
  return (
    <main className="px-5 lg:w-[calc(100%-220px)]">
      {children}
      {shopData.length ? (
        <Pagination
          // setSearchNum={setSearchNum}
          // setShopData={setShopData}
          currentPage={currentPage}
        />
      ) : (
        <></>
      )}
    </main>
  );
};
