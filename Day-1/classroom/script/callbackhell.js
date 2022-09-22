

const getUser = (id, callbackDemo) => {
    setTimeout(() => {
      console.log("Getting the User from the database");
      callbackDemo({
        id: id,
        name: "Kk",
      });
    }, 2000);
  };
  
  
    const loadBlogs = (username, callbackDemo) => {
      setTimeout(() => {
        console.log("Getting Twitter REST API to lad the posts");
        callbackDemo(['Post-1','Post-2','Post-3']);
      }, 2000);
    };
    
    const loadComments = (post, callbackDemo) => {
      setTimeout(() => {
        console.log("Getting Twitter to load the comments");
        callbackDemo(['comments for ' + post]);
      }, 2000);
    };

    const loadrating = (rating, callbackDemo) => {
        setTimeout(() => {
          console.log("Getting Twitter to load the rating");
          callbackDemo([rating]);
        }, 2000);
      };
    
    getUser(101,(user) => {
        loadBlogs(user.name,(blogs) =>{
            loadComments(blogs[0] ,(comments) =>{
                loadrating(blogs[0], (rating) =>{
                    console.log(user,blogs[0],comments,rating);
                })
            })
        })
    })