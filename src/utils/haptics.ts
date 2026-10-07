/**
 * Web Haptic Feedback Utility
 * Provides native-like tactile vibrations on mobile devices supporting the Vibration API.
 */

export const triggerHaptic = (type: 'light' | 'medium' | 'heavy' | 'selection' | 'success' | 'warning' = 'light') => {
  if (typeof window === 'undefined' || !('vibrate' in navigator)) return;

  try {
    switch (type) {
      case 'selection':
        // Crisp 12ms tick for carousel sliding, tabs, and filters
        navigator.vibrate(12);
        break;
      case 'light':
        // Gentle 20ms tap for standard buttons
        navigator.vibrate(20);
        break;
      case 'medium':
        // 35ms solid press
        navigator.vibrate(35);
        break;
      case 'heavy':
        // 60ms impactful action
        navigator.vibrate(60);
        break;
      case 'success':
        // [tick, pause, solid tick]
        navigator.vibrate([20, 40, 40]);
        break;
      case 'warning':
        // [buzz, buzz]
        navigator.vibrate([40, 50, 40]);
        break;
      default:
        navigator.vibrate(15);
    }
  } catch {
    // Graceful fallback on devices that block vibration
  }
};
