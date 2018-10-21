export default {
  geolocation: () => {
    return typeof window !== 'undefined' && 'geolocation' in navigator
  },
}
