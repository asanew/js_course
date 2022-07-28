function checkAccess(user) {
  return ((user.age >= 18 && user.age <= 35) && (user.paid && !user.blocked && !user.badUserame || user.isAdmin)) ? 
    true : false; 
}

