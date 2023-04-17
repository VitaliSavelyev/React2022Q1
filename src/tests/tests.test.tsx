import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import {Provider} from "react-redux";
import {store} from "../store";
import App from "../app";
import AboutUs from "../routes/about/about";
import Forms from '../routes/forms/forms';
import NotFound from "../routes/notfound/notFound";
import {configureStore} from "@reduxjs/toolkit";
import formReducer from "../store/formSlice";
import homeReducer from "../store/homeSlice";
import ModalCard from "../routes/home/modalCard/modalCard";
import Card from "../routes/home/Card/card";
import 'whatwg-fetch'

describe('Testing routing', () => {
  test('should generate home', () => {
      render(
          <React.StrictMode>
              <BrowserRouter>
                  <Provider store={store}>
                      <App />
                  </Provider>
              </BrowserRouter>
          </React.StrictMode>
      );
    const home = screen.getByTestId('home');
    expect(home).toBeTruthy();
  });

    test('should generate home', () => {
        render(
            <React.StrictMode>
                <BrowserRouter>
                    <Provider store={store}>
                        <AboutUs />
                    </Provider>
                </BrowserRouter>
            </React.StrictMode>
        );
        const about = screen.getByTestId('about');
        expect(about).toBeTruthy();
    });
    test('should generate forms', () => {
        render(
            <React.StrictMode>
                <BrowserRouter>
                    <Provider store={store}>
                        <Forms />
                    </Provider>
                </BrowserRouter>
            </React.StrictMode>
        );
        const forms = screen.getByTestId('forms');
        expect(forms).toBeTruthy();
    });
    test('should generate not found', () => {
        render(
            <React.StrictMode>
                <BrowserRouter>
                    <Provider store={store}>
                        <NotFound />
                    </Provider>
                </BrowserRouter>
            </React.StrictMode>
        );
        const notfound = screen.getByTestId('notfound');
        expect(notfound).toBeTruthy();
    });
    test('should generate modal card', () => {
        const store = configureStore({
            reducer: {
                form: formReducer,
                home: homeReducer,
            },
        });

        render(
            <React.StrictMode>
                <BrowserRouter>
                    <Provider store={store}>
                        <ModalCard />
                    </Provider>
                </BrowserRouter>
            </React.StrictMode>
        );
        const modal = screen.getByTestId('modal');
        expect(modal).toBeTruthy();
    });
    test('should generate card', () => {
        const store = configureStore({
            reducer: {
                form: formReducer,
                home: homeReducer,
            },
        });
        const  character = {
            id: 'string',
            name: 'string',
            species: 'string',
            type: 'string',
            status: 'string',
            gender: 'string',
            image: 'string',
            birthday: 'string',
            location: 'string',
        }
        render(
            <React.StrictMode>
                <BrowserRouter>
                    <Provider store={store}>
                        <Card card={character} />
                    </Provider>
                </BrowserRouter>
            </React.StrictMode>
        );
        const card = screen.getByTestId('card');
        expect(card).toBeTruthy();
    });
});
