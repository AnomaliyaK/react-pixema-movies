export enum FirebaseErrorMessage {
  WEAK_PASSWORD = "password must be contain 6 characters",
  EMAIL_EXISTS = "Email already exists",
  WRONG_PASSWORD = "Wrong password",
  USER_NOT_FOUND = "User not found",
  UNKNOWN_ERROR = "unknown error please reload page",
}

export const getFirebaseErrorMessage = (code: string): FirebaseErrorMessage => {
  switch (code) {
    case "auth/weak-password":
      return FirebaseErrorMessage.WEAK_PASSWORD;
    case "auth/email-already-in-use":
      return FirebaseErrorMessage.EMAIL_EXISTS;
    case "auth/user-not-found":
      return FirebaseErrorMessage.USER_NOT_FOUND;
    case "auth/wrong-password":
      return FirebaseErrorMessage.WRONG_PASSWORD;
    default:
      return FirebaseErrorMessage.UNKNOWN_ERROR;
  }
};
