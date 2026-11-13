import AceLanding from "@/components/AceLanding/AceLanding"
import Script from "next/script"

const HomePage: React.FC = () => {
  return (
    <>
      <Script
        src="//wcs.pstatic.net/wcslog.js"
        strategy="afterInteractive" // 또는 "lazyOnload"
      />

      <Script
        id="naver-wcs"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if(!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "a8cc8aa3017fd8";
            if(window.wcs) {
              wcs_do();
            }
          `,
        }}
      />
      <AceLanding />
    </>
  )
}

export default HomePage
