import { Button, Card, Flex, Heading, Link } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { THEME_COLORS } from "../util";

const ConfusedUngaBunga = () => (
  <svg width="200" height="200" viewBox="0 0 393 392" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M264 11.5V23H231.02H198.04L184.402 38.898C176.9 47.642 170.763 55.113 170.763 55.5C170.763 55.887 176.9 63.358 184.402 72.102L198.04 88H204.02H210V109V130H204.12H198.241L184.62 145.968C177.129 154.75 171 162.368 171 162.897C171 163.427 176.919 170.754 184.154 179.18L197.307 194.5L230.404 195L263.5 195.5L263.759 247.25L264.018 299H176.509H89L88.988 295.25C88.956 285.031 83.791 273.703 75.441 265.539L69.264 259.5L73.098 256.784C75.206 255.29 78.508 251.915 80.434 249.284C86.108 241.535 87 237.605 87 220.359C87 200.884 85.587 196.412 76.588 187.412C69.021 179.846 61.868 176.786 51.5 176.68C39.136 176.554 28.324 182.169 21.345 192.343C16.272 199.738 15 205.423 15 220.706C15 236.56 16.582 242.3 23.357 251.024L27.725 256.649L23.266 259.015C13.49 264.201 4.55199 276.371 2.12499 287.799C1.37799 291.317 0.99999 309.718 0.99999 342.549V392H6.49999H12V344.636C12 296.029 12.395 289.947 16.041 282.415C23.336 267.346 42.967 260.26 58.156 267.214C65.306 270.487 71.465 276.626 74.849 283.852C77.371 289.238 77.51 290.393 77.839 308.75L78.184 328H68.092H58V313.5V299H52.5H47V345.5V392H52.483H57.967L58.233 365.75L58.5 339.5H68H77.5L77.767 365.75L78.033 392H83.517H89V351V310H241H393V304.5V299H345.491H297.982L298.241 247.25L298.5 195.5L325.25 195.234L352 194.967V168.484V142H357.95H363.9L375.7 128.262C382.19 120.707 388.52 113.32 389.767 111.848L392.033 109.172L378.267 93.087L364.5 77.002L358.25 77.001L352 77V50V23H325H298V11.5V0H281H264V11.5ZM286.8 17.25L287.1 23H281.05H275V17.667C275 14.733 275.32 12.013 275.712 11.622C276.103 11.23 278.69 11.043 281.462 11.205L286.5 11.5L286.8 17.25ZM340.5 55.5V76.5L271.985 76.757L203.469 77.014L194.788 66.757C190.014 61.116 186.042 56.128 185.962 55.673C185.829 54.909 195.377 43.164 201.352 36.743L203.917 33.986L272.209 34.243L340.5 34.5V55.5ZM208 55.5V61H214H220V55.5V50H214H208V55.5ZM231 55.5V61H237H243V55.5V50H237H231V55.5ZM254 55.5V61H260H266V55.5V50H260H254V55.5ZM18.363 66.872C9.48399 71.012 2.89699 79.539 1.41399 88.813L0.72699 93.108L6.57699 92.804C12.337 92.505 12.436 92.449 13.113 89.123C13.909 85.204 16.472 81.484 20.385 78.562C24.579 75.431 34.403 75.658 39.338 79C49.749 86.051 49.213 101.489 38.34 107.761C28.207 113.606 24 120.385 24 130.866V136H29.5H35V131.968C35 125.242 37.139 121.677 43.241 118.233C63.368 106.874 62.753 77.426 42.179 67.361C36.641 64.651 23.696 64.386 18.363 66.872ZM80.871 89.006C74.877 92.173 71.159 97.343 69.548 104.75L68.841 108H74.407C79.782 108 80.022 107.884 81.381 104.631C82.155 102.778 83.836 100.528 85.117 99.631C91.787 94.959 101.342 101.613 99.567 109.694C99.226 111.248 96.645 114.745 93.832 117.465C88.215 122.897 85.056 128.737 85.022 133.75L85 137H90.5C95.069 137 96.001 136.704 96.005 135.25C96.013 132.645 100.007 126.71 104.185 123.095C114.79 113.92 112.61 95.935 100.093 89.327C94.499 86.374 86.117 86.234 80.871 89.006ZM367.974 98.578L377.017 109.156L374.258 112.446C372.741 114.255 368.8 118.936 365.5 122.849L359.5 129.962L290.75 129.981L222 130V109V88H290.466H358.931L367.974 98.578ZM296.402 105.395C296.108 106.162 296.009 108.524 296.183 110.645L296.5 114.5L302.25 114.8L308 115.1V109.55V104H302.469C298.66 104 296.771 104.434 296.402 105.395ZM320 109.5V115H325.5H331V109.5V104H325.5H320V109.5ZM343 109.5V115H348.5H354V109.5V104H348.5H343V109.5ZM127.5 118.921C125.3 119.953 122.211 122.033 120.636 123.544C117.394 126.655 113.024 135.367 113.01 138.75C113.001 140.808 113.463 141 118.422 141C123.682 141 123.878 140.9 124.946 137.665C129.731 123.164 150.982 126.167 150.996 141.346C151.001 146.545 148.593 150.259 142.491 154.462C136.463 158.613 133.143 163.999 132.318 170.962L131.721 176H137.233H142.744L143.366 172.111C144.019 168.031 145.75 165.981 152.728 161.023C164.29 152.809 165.598 133.515 155.253 123.792C147.933 116.912 136.178 114.849 127.5 118.921ZM340.77 162.75L340.5 183.5L271.825 183.757L203.15 184.014L194.575 173.917C189.859 168.363 186 163.356 186 162.789C186 162.223 189.85 157.314 194.555 151.88L203.11 142H272.075H341.041L340.77 162.75ZM24 153V159H29.5H35V153V147H29.5H24V153ZM85 154V160H90.5H96V154V148H90.5H85V154ZM208.406 158.386C208.113 159.14