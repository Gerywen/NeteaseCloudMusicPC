import axios from "@/network/axios";
export const BANNER = "banner";

export function getHomeBanner() {
  return axios({
    url: "/banner",
  });
}