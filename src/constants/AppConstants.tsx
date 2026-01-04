import { Platform } from 'react-native';
import { getTranslation } from '../localization/i18n/i18n.config';

// <============================== App State Keys ==============================>

export const AppStates = {
  FOREGROUND: 'FOREGROUND',
  BACKGROUND: 'BACKGROUND',
  KILL: 'KILL',
};

// <============================== Notification Types ==============================>

export const NotificationTypes = {
  ADMIN_NOTIFICATIONS: 'admin_notification',
};

// <============================== Screen Name ==============================>

export const ScreenNames = {
  //auth
  LOGINCONTAINER: 'LoginContainer',
};

// <============================== IOS Condition ==============================>

export const isPlatformiOS = Platform.OS === 'ios';
