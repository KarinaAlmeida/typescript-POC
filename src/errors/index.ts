function conflictError(message:any) {
    return {
      name: "ConflictError",
      message,
    };
  }
  
  function notFoundError() {
    return {
      name: "NotFoundError",
      message: "No result for this search!",
    };
  }
  function alreadyExists() {
    return {
      name: "AlreadyExists",
      message: "This book is already registered!",
    };
  }

  


  
  
  
  
  export default {
    conflictError,
    notFoundError,
    alreadyExists
  };