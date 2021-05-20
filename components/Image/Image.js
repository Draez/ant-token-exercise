import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import { Image as AntImage, Skeleton } from "antd";
import Typography from "@namia/typography";
import useImage from "../../hooks/useImage";
import Result from "../Result";
import { ChildColorWrapper, ElementWrapper } from "../../styles/styles";

const Image = props => {
  const {
    loadingBlurHash,
    size,
    showSkeleton,
    height,
    id,
    width,
    crop
  } = props;
  const imageData = useImage({ id });
  const [loading, toggleLoading] = useState(false);
  useEffect(() => {
    if (!imageData && !loading) {
      toggleLoading(true);
    } else if (imageData && loading) {
      toggleLoading(false);
    }
  }, [imageData, loading]);
  const [reloadLoading, toggleReloadLoading] = useState(false);
  if (loading) {
    return (
      <ElementWrapper style={{ width: "100%" }}>
        <Blurhash
          hash={loadingBlurHash}
          width={width}
          height={height}
          punch={1}
        />
        {showSkeleton && <Skeleton active paragraph={{ rows: 2 }} />}
      </ElementWrapper>
    );
  }
  if (!imageData) {
    return <h1>Error</h1>;
  }
  const { blur_hash, urls } = imageData;
  const imgUrl = crop ? `${urls[size]}&${crop}` : urls[size];
  return (
    <AntImage
      src={imgUrl}
      placeholder={
        <Blurhash
          hash={blur_hash}
          width="100%"
          height={height === "auto" ? 375 : height}
        />
      }
      width={width}
      height={height}
      preview={false}
    />
  );
};

Image.defaultProps = {
  crop: "",
  height: "auto",
  id: 1,
  loadingBlurHash: "LyEf~JjY4TWB%LozM{WBWXaes:of",
  size: "small",
  showSkeleton: false,
  width: "100%"
};

export default Image;
