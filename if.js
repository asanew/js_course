function checkAccess(user) {
  if ((user.age >= 18 && user.age <= 35) && (user.paid && !user.blocked && !user.badUserame || user.isAdmin))
    return true;
  else
    return false; 
}

