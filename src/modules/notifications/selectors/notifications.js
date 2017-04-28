import { createSelector } from 'reselect';
import store from 'src/store';
import { selectNotificationsState } from 'src/select-state';

import getValue from 'utils/get-value';

export default function () {
  return selectNotificationsAndSeenCount(store.getState());
}

export const selectNotificationsAndSeenCount = createSelector(
  selectNotificationsState,
  (notifications) => {
    const sortedNotifications = notifications.sort((a, b) => getValue(b, 'timestamp.timestamp') - getValue(a, 'timestamp.timestamp'));
    const unseenCount = sortedNotifications.reduce((p, notification) => {
      if (!notification.seen) return 1 + p;
      return p;
    }, 0);

    console.log('### notifications -- ', sortedNotifications, unseenCount);

    return {
      unseenCount,
      notifications: sortedNotifications
    };
  }
);
