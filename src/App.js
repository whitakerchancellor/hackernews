import React, { Component } from 'react';
import './App.css';
import Cookies from 'universal-cookie';

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '100';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

const cookies = new Cookies();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cookie: cookies,
      results: null,
      searchKey: '',
      searchTerm: cookies.get('savedSearch') || DEFAULT_QUERY,
      error: null,
    };

    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  needsToSearchTopStories(searchTerm) {
    return !this.state.results[searchTerm];
  }
  fetchSearchTopStories(searchTerm, page = 0) {
      this.setState({ isLoading: true });
      fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result));
  }

  setSearchTopStories(result) {
    const { hits, page } = result;
    const { searchKey, results } = this.state;

    const oldHits = results && results[searchKey]
      ? results[searchKey].hits
      : [];

    const updatedHits = [
      ...oldHits,
      ...hits
    ];

    this.setState({
      results: {
        ...results, [searchKey]: { hits: updatedHits, page }
      }
    });
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);

  }

  onDismiss(id) {
    const { searchKey, results } = this.state;
    const { hits, page } = results[searchKey];

    const isNotId = item => item.objectID !== id;
    const updatedHits = hits.filter(isNotId);
    this.setState({
      results: { ...results, [searchKey]: { hits: updatedHits, page } }
    });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });

  }

  onSearchSubmit(event) {
    const { searchTerm, cookie } = this.state;
    this.setState({ searchKey: searchTerm });
    cookie.set('savedSearch', searchTerm, { path: '/' });

    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm);
    }

    event.preventDefault();
  }

  render() {
    const { searchTerm, results, searchKey, error } = this.state;
    const page = (results && results[searchKey] && results[searchKey].page) || 0;
    const list = (results && results[searchKey] && results[searchKey].hits) || [];

    if (error) {
      return <p>Something went wrong.</p>
    }

    return (
      <div className="page">
        <div className="interactions">
          <Search
            onChange={this.onSearchChange}
            value={searchTerm}
            onSubmit={this.onSearchSubmit}
            >
            Search
          </Search>
        </div>
        {error ?
          <div className="interactions">
            <p>Something went wrong.</p>
          </div> :
          <Table
            list={list}
            onDismiss={this.onDismiss}
          />}
        <div className="interactions">
          <Button onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>
            More
            </Button>
        </div>
      </div>
    );
  }
}

export const Search = ({ value, onChange, onSubmit, children }) =>
  <form onSubmit={onSubmit} >
    <input
      type="text"
      onChange={onChange}
      value={value}
    />
    <button type="submit">
      {children}
    </button>
  </form>


const largeColumn = { width: '40%', };
const midColumn = { width: '30%', };
const smallColumn = { width: '10%', };

export const Table = ({ list, onDismiss }) =>
  <div className="table">
    {list.map(item =>
      <div key={item.objectID} className="table-row">
        <span style={largeColumn}>
          <a href={item.url}>{item.title}</a></span>

        <span style={midColumn}>
          {item.author}</span>

        <span style={smallColumn}>
          {item.num_comments}</span>

        <span style={smallColumn}>
          {item.points}</span>

        <span style={smallColumn}>
          <Button onClick={() => onDismiss(item.objectID)}
            type="button"
            className="button-inline">
            Dismiss
              </Button>
        </span>
      </div>
    )}
  </div>

export const Button = ({ onClick, className, children }) =>
  <button
    onClick={onClick}
    className={className}
    type="button">
    {children}
  </button>

export default App;
