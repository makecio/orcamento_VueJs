

const getters = {
    isAuthenticated:function(){
        if(localStorage.getItem('user-token')){
          return true;
        }else{
          return false;
        }
    }
  
}

export default {
    name: 'store',
    getters: getters
}

