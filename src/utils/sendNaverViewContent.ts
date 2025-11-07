const NAVER_ACCOUNT_ID = "s_4ba5ee74ec66"

export const sendNaverViewContent = () => {
  if (typeof window === "undefined" || !window.wcs) {
    console.warn("wcs not loaded")
    return
  }

  if (!window.wcs_add) window.wcs_add = {}
  window.wcs_add["wa"] = NAVER_ACCOUNT_ID

  window.wcs.trans({ type: "view_content" })
  console.log("NAVER view_content 전송 성공!")
}
