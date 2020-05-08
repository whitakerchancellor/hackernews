import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount, render, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App, { Search, Button, Table } from './App';
configure({ adapter: new Adapter() });
global.mount = mount;
global.render = render;
global.shallow = shallow;
describe('App', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('renders the Table component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Table).length).toEqual(1);
  });
  it('renders the Search component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Search).length).toEqual(1);
  });
  it('renders four Button components', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Button).length).toEqual(4);
  });
  /*test('snapshots', () => {
    const component = renderer.create(
      <App />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });*/
});
describe('General test', () => {
    test('Always Pass Test', () => {
      expect(true).toEqual(true);
    });
  });
describe('Search', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search>Search</Search>, div);
  });
  test('snapshots', () => {
    const component = renderer.create(
      <Search>Search</Search>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Button', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>Give Me More</Button>, div);
  });
  test('snapshots', () => {
    const component = renderer.create(
      <Button>Give Me More</Button>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Table', () => {
  const props = {
    list: [
      { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
      { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' },
    ],
    sortKey: 'TITLE',
    isSortReverse: false,
  };
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table {...props} />, div);
  });
  test('Creates Table', () => {
    expect(wrapper.find(Table).length).toEqual(1);
  });
  test('snapshots', () => {
    const component = renderer.create(
      <Table {...props} />
    );
    let tree = component.toJSON();
  });
  it('shows two items in list', () => {
    const element = shallow(
      <Table {...props} />
    );
    expect(element.find('.table-row').length).toBe(2);
  });
});