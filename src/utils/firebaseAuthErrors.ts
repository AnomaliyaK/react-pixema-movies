export enum FirebaseErrorMessage {
  WEAK_PASSWORD = 'password must be contain 6 characters',
  UNKNOWN_ERROR = 'unknown error please reload page',
}

export const getFirebaseErrorMessage = (code: string): FirebaseErrorMessage => {
  switch (code) {
    case 'auth/weak-password':
      return FirebaseErrorMessage.WEAK_PASSWORD;
    // добавить еще кейсов с ошибками
    default:
      return FirebaseErrorMessage.UNKNOWN_ERROR;
  }
};
