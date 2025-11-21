interface ContentfulImgData {
  title?: string;
  description?: string;
  imageUrl: string | null;
  width: number;
  height: number;
  fileName?: string;
}

export const getContentfulImgData = (imageFile: any): ContentfulImgData => {
  const {
    title,
    description,
    file: {
      fileName,
      contentType,
      url,
      details: {size, image: {width = 0, height = 0} = {}} = {},
    } = {},
  } = (imageFile as any)?.fields || imageFile || {};

  const kiloBytes = size ? size / 1000 : null;
  let imageUrl = url ? 'https:' + url : null;
  let quality = 100;

  if (kiloBytes !== null) {
    if (kiloBytes >= 300 && kiloBytes < 500) {
      quality = 90;
    } else if (kiloBytes >= 500 && kiloBytes < 700) {
      quality = 80;
    } else if (kiloBytes >= 700) {
      quality = 75;
    }
  }

  switch (contentType) {
    case 'image/jpeg':
      imageUrl = imageUrl && imageUrl.concat('?q=', String(quality));
      break;
    case 'image/gif':
      imageUrl = imageUrl && imageUrl.concat('?fm=avif&q=', String(quality));
      break;
  }

  return {
    title,
    description,
    imageUrl,
    width,
    height,
    fileName,
  };
};
