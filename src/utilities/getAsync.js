export default function getAsync( asyncFunction ) {
  async function doAsync( fn ) {
    return await fn()
  }
  return doAsync( asyncFunction )
}
