import { render, screen } from '@testing-library/react';
import {render as renderer, unmountComponentAtNode } from 'react-dom';
import AddContact from './Component/AddContact/AddContact';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';

describe('Contact Manager Test Cases',()=>
{
  let element;
  beforeEach(()=>{
    element=document.createElement('div');
    document.body.appendChild(element);
  })

  afterEach(()=>{
    unmountComponentAtNode(element);
    element.remove();
    element=null;
  })

  test('Should render Header component with Contact Manager Text',()=>{
    render(<Header/>);
    expect(screen.getByText('Contact Manager')).toBeInTheDocument();
  })

  test('Should have 1 link in Footer Component',()=>{
    renderer(<Footer/>,element);
    const count=element.getElementsByTagName('a').length;
    expect(count).toBe(1);
  })

  test('Should have Add Contact text in button of AddContact component',()=>{
    render(<AddContact/>);
    expect(screen.getByTestId('btnAdd')).toHaveTextContent('Add Contact');
  })

  test('AddContact component should have bootstrap class btn-secondary',()=>{
    render(<AddContact/>);
    expect(screen.getByTestId('btnAdd')).toHaveClass('btn-secondary');
  })

  test('Header should have 3 hyperlinks with nav-link class',()=>{
    renderer(<Header/>,element);
    const links=element.getElementsByTagName('a');
    for (let i = 1; i < links.length; i++) {
      expect(links[i]).toHaveClass('nav-link');
      
    }
  })

})

