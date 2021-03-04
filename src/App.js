import React, { useEffect } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const App = ({ currentUser, setCurrentUser }) => {

  useEffect(() => {
  
	//login using google
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
		//store user from database to state
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				// Subscribe/listen to any changes in the data
				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						currentUser: {
							id: snapShot.id,
							...snapShot.data() //get all properties inside .data();
						}
					})
				})
			} else {
				setCurrentUser(userAuth);
			}
		});
    
    //logout
    return () => unsubscribeFromAuth();
  }, [setCurrentUser])

  const renderRedirect = () => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />);

  return(
    <div>
      {/* <Header currentUser={this.state.currentUser} /> // note; currentUser props will be remove since we are now using redux to pass props to component */}
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={renderRedirect} />
      </Switch>
    </div>
  )

	}





const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

// just to have contact page
export const ContactPage = () => (
  <div>
    <b>Contact page:</b>
    
    <p>created by: wenzie querubin</p>
    <p>email: wenzie12sg@gmail.com</p>
  </div>
)