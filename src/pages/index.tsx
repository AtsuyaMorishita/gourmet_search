import FixedButton from "@/components/FixedButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LayoutMain } from "@/components/LayoutMain";
import { LayoutWrap } from "@/components/LayoutWrap";
import { ShopItem } from "@/components/ShopItem";
import { Sidebar } from "@/components/Sidebar";
import { TextArea } from "@/components/TextArea";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [searchNum, setSearchNum] = useState(null);
  const [shopData, setShopData] = useState([]);
  const [genreName, setGenreName] = useState("全てのジャンル");

  const router = useRouter();
  const currentPage: any = router.query.page ? router.query.page : 1;

  //sp サイドメニューの表示切り替え
  const [sideIn, setSideIn] = useState<string | null>(null);
  const sideNavIn = () => {
    if (!sideIn) {
      setSideIn("left-[0]");
    } else {
      setSideIn(null);
    }
  };

  const firstGetShop = async () => {
    setShopData([]);
    setSearchNum(null);
    try {
      const res = await axios.get("/api/getShopLists", {
        params: {
          place: "all",
          startNum: currentPage,
        },
      });
      setGenreName("全てのジャンル");
      setSearchNum(res.data.results_available);
      setShopData(res.data.shop);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    firstGetShop();
  }, []);

  useEffect(() => {
    firstGetShop();
  }, [router.query]);

  return (
    <>
      <Header onClick={firstGetShop} />

      <LayoutWrap>
        <Sidebar
          area={"all"}
          resolvedUrl={"/genre"}
          setSearchNum={setSearchNum}
          setShopData={setShopData}
          sideIn={sideIn}
          setSideIn={setSideIn}
          setGenreName={setGenreName}
        />
        <LayoutMain
          shopData={shopData}
          // setSearchNum={setSearchNum}
          // setShopData={setShopData}
          currentPage={currentPage}
        >
          <TextArea searchNum={searchNum} genreName={genreName} area={"all"} />
          <ul>
            {shopData.map((shop: any) => (
              <ShopItem key={shop.id} shop={shop} />
            ))}
          </ul>
        </LayoutMain>
      </LayoutWrap>

      <Footer />

      <FixedButton onClick={sideNavIn} />
    </>
  );
}
