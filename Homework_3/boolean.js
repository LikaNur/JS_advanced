function checkAccess(role, isLoggedIn) {
  if (!isLoggedIn) {
    return false;
  }

  if (role === "admin") {
    return true;
  } else if (role === "user") {
    return true;
  } else {
    return false;
  }
}

function adminAccess(isLoggedIn) {
  return checkAccess("admin", isLoggedIn);
}

function userAccess(isLoggedIn) {
  return checkAccess("user", isLoggedIn);
}

const isAdminLoggedIn = true;
const isUserLoggedIn = false;

console.log("Admin access:", adminAccess(isAdminLoggedIn));
console.log("User access:", userAccess(isUserLoggedIn));
