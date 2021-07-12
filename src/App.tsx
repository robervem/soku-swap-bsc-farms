import React, { lazy } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS, useWalletModal } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { useFetchPriceList, useFetchProfile, useFetchPublicData } from 'state/hooks'
import useAuth from 'hooks/useAuth'

import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
import EasterEgg from './components/EasterEgg'
import Pools from './views/Pools'
import history from './routerHistory'
import AccountModal from './components/AccountModal'
import ClaimSokuModal from './components/ClaimSokuModal'

import './MobileFooter.css'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Lottery = lazy(() => import('./views/Lottery'))
const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
const Collectibles = lazy(() => import('./views/Collectibles'))
const Teams = lazy(() => import('./views/Teams'))
const Team = lazy(() => import('./views/Teams/Team'))
const Profile = lazy(() => import('./views/Profile'))
const TradingCompetition = lazy(() => import('./views/TradingCompetition'))
const Predictions = lazy(() => import('./views/Predictions'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App = () => {
  useEagerConnect()
  useFetchPublicData()
  useFetchProfile()
  useFetchPriceList()

  const account = useWeb3React()
  const { login, logout } = useAuth()

  const { onPresentConnectModal } = useWalletModal(login, logout)

  const openHiddenLinks = () => {
    const hiddenLinks = document.getElementsByClassName('hidden_navLinks')
    // console.log(hiddenLinks)
    if (hiddenLinks[0]?.id === 'hidden_navLinks') {
      hiddenLinks[0].id = 'open'
    } else if (hiddenLinks[0]?.id === 'open') {
      hiddenLinks[0].id = 'hidden_navLinks'
    }
  }

  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu />
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <Switch>
<<<<<<< Updated upstream
          <Route path="/">
=======
          <Route path="/farms" exact>
>>>>>>> Stashed changes
            <Farms />
          </Route>
          {/* <Route path=0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"/pools">
            <Pools />
          </Route>
          <Route path="/lottery">
            <Lottery />
          </Route>
          <Route path="/ifo">
            <Ifos />
          </Route>
          <Route path="/collectibles">
            <Collectibles />
          </Route>
          <Route exact path="/teams">
            <Teams />
          </Route>
          <Route path="/teams/:id">
            <Team />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/competition">
            <TradingCompetition />
          </Route>
          <Route path="/prediction">
            <Predictions />
          </Route> */}
          {/* Redirect */}
          {/* <Route path="/staking">
            <Redirect to="/pools" />
          </Route>
          <Route path="/syrup">
            <Redirect to="/pools" />
          </Route>
          <Route path="/nft">
            <Redirect to="/collectibles" />
          </Route> */}
          {/* 404 */}
          <Route component={NotFound} />
        </Switch>
        <div className="connectWallet__options__MOBILE">
          <ul>
            {account ? (
              <li className="account__footer">
                <AccountModal />
              </li>
            ) : (
              <li className="connectWallet">
                <button type="button" onClick={onPresentConnectModal}>
                  Connect Wallet
                </button>
              </li>
            )}
            <li className="claimSoku">
              <ClaimSokuModal />
            </li>
            <li>
              <button type="submit" className="material-icons" onClick={openHiddenLinks}>
                more_horiz
              </button>
            </li>
          </ul>
          <ul className="hidden_navLinksMobile" id="hidden_navLinks">
            <li>
              <a href="https://www.sokuswap.finance/" rel="noreferrer noopener" target="_blank">
                <span className="material-icons">info</span>
                <p>About</p>
              </a>
            </li>
            <li>
              <a href="https://github.com/Soku-Swap-Project" rel="noreferrer noopener" target="_blank">
                <span className="material-icons">code</span>
                <p>Code</p>
              </a>
            </li>
            <li>
              <a href="/" rel="noreferrer noopener" target="_blank">
                <span className="material-icons">analytics</span>
                <p>Analytics</p>
              </a>
            </li>
          </ul>
        </div>
      </SuspenseWithChunkError>
      <EasterEgg iterations={2} />
      <ToastListener />
    </Router>
  )
}

export default App
