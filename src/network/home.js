import axios from "@/network/axios";
export const BANNER = "banner";

export function getHomeBanner() {
  return axios({
    url: "/banner",
  });
}
export function getHotRecommend() {
  return axios({
    url: "/personalized",
  });
}
export function getTopAlbum() {
  return axios({
    url: "/album/newest",
  });
}
