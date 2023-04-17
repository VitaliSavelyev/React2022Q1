import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import {Provider} from "react-redux";
import {store} from "../store";
import App from "../app";

describe('Testing routing', () => {
  beforeEach(() => {
    render(
        <React.StrictMode>
          <BrowserRouter>
            <Provider store={store}>
              <App />
            </Provider>
          </BrowserRouter>
        </React.StrictMode>
    );
  });

  test('should generate home', () => {
    const home = screen.getByTestId('home');
    expect(home).toBeTruthy();
  });
});
