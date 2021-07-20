import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';


import Converter from "./Converter";
import fetchRate from "../api";
import {API_URL} from "../constants";

describe('Converter component', () => {

  const mockList = {
    quotes: {
      EUR: 0.812838,
    },
  };

  // Mock fetch
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(mockList)
  })) as jest.Mock;


// Unmounts React trees
  afterEach(cleanup);

  // Check basic rendering
  it('component on mount', () => {
    render(<Converter/>);
    const converterElement = screen.getByTestId('converter-test');
    expect(converterElement).toBeInTheDocument();
  })

  // Check API
  it('promise was resolved', async () => {
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toBeCalledWith(API_URL);

    const rate = await fetchRate();
    // I use here a specific value of 0.812838 from the server, only because it is fake data on the server
    expect(rate.quotes.EUR).toEqual(0.812838);
  })
})
