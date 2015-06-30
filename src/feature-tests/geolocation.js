export default {
  feature: 'geolocation',
  test: () => {
    return typeof window !== 'undefined' &&
      'geolocation' in navigator
  }
}
