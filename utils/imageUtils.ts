/**
 * Handles image paths by adding a prefix to internal paths
 * @param imagePath The original image path
 * @returns The processed image path
 */
export const handleImagePath = (imagePath: string): string => {
  const imagePrefix = process.env.imagePrefix || '';
  
  // Check if the image path is external (starts with http or https)
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // For internal paths, add the prefix
  return `${imagePrefix}${imagePath}`;
};