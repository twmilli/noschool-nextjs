import React from 'react';
import { Provider } from 'react-redux';
import { Heart, Feather } from 'react-feather';
import Link from 'next/link';
import { InstantSearch } from 'react-instantsearch/dom';
import Main from '../components/Main';
import store from '../store/store';
import stylesheet from '../styles/index.scss';
import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <Provider store={store}>
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="App">
          <div className="banner">
            <Link href="/"><a className="overlay logo">Noschool.io</a></Link>
            <Link href="/contact"><a className="overlay contact">Contact</a></Link>
            <div className="overlay main">Discover awesome activities for your gap year</div>
            <div className="overlay sub">Explore the world, try something new</div>
          </div>
          <InstantSearch
            appId="AZ293N8KMQ"
            apiKey="ab9e458f31e3e6f9a8e73a2304de3067"
            indexName="gapyear"
          >
            <Main />
          </InstantSearch>
        </div>
        <footer>
          <p>Made with </p><Heart /> <p> by <a href="http://taylormilliman.me/">Taylor</a></p>
          <div className="feedback-link-container">
            <Link href="/feedback">
              <a>Leave Some Feedback! <Feather />
              </a>
            </Link>
          </div>
        </footer>
      </div>
    </Provider>
  </Layout>
);

export default Index;
