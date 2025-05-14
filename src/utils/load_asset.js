export const getAssetURL = (image) => {
  const path = `../assets/img/${image}`
  // console.log(import.meta.url,"------", 'image = ',image ," path = ", path)
  // 参数一: 相对路径
  // 参数二: 当前路径的URL
  const baseUrl = new URL(path, import.meta.url)
  // console.log("baseUrl = ", baseUrl)
  return baseUrl.href
}



// export const getAssetURL = (image) => {
//   // 参数一: 相对路径
//   // 参数二: 当前路径的URL
//   return new URL(`../assets/img/${image}`, import.meta.url).href
// }


