export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';
export const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS';

export function addNotification(notification) {
  console.log('add notification -- ', notification);

  return {
    type: ADD_NOTIFICATION,
    data: {
      notification
    }
  };
}

export function removeNotification(index) {
  return {
    type: REMOVE_NOTIFICATION,
    data: index
  };
}

export function updateNotification(index, notification) {
  return {
    type: UPDATE_NOTIFICATION,
    data: {
      index,
      notification
    }
  };
}

export function clearNotification() {
  return {
    type: CLEAR_NOTIFICATIONS
  };
}
