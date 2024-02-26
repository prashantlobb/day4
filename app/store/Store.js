import {action, makeObservable, observable, runInAction} from 'mobx';
import { TOKEN_URL, URL, apiRequest } from '../configs';
import AsyncStorage from '@react-native-community/async-storage';

class Store {
    cardData = {};
    token=null;
    isLoading = false;
    user =""
  constructor() {
    makeObservable(
      this,
      {
          cardData: observable,
          isLoading:observable,
          user:observable,
          refreshHandler:action,
          login:action,
          logout:action,
          setCardData:action,
          setUserToken:action

      }
    );
  }

login = async email => {
    try {
      const response = await apiRequest({
        path: TOKEN_URL,
        method: 'POST',
        data: {email},
      });
      AsyncStorage.setItem('token', response.token);
      AsyncStorage.setItem('email', email);
      this.setUserToken({email,token:response.token})
      if (response.token) {
        await this.refreshHandler(response.token);
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  logout = () => {
    this.token = null;
    AsyncStorage.removeItem('token');
    this.isLoading = false
  };

  refreshHandler = async token => {
    try {
      const response = await apiRequest({
        path: URL,
        token: token,
      });
      this.setCardData(response.content)
    
    } catch (error) {
      console.log(error);
    }
  };
  setCardData =(data)=>{
  this.cardData = data
  }
  setUserToken =(data)=>{
    const {token,email} = data
    this.token = token
    this.user = email
  }
}

export default Store = new Store();